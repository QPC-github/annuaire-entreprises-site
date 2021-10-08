import { NextApiRequest, NextApiResponse } from 'next';
import httpClient from '../../../utils/network/http';
import redirect, { redirectForbidden } from '../../../utils/redirects';
import logErrorInSentry, { logWarningInSentry } from '../../../utils/sentry';
import { setCaptchaCookie } from '../../../utils/captcha';

const verify = async (req: NextApiRequest, res: NextApiResponse) => {
  const path = decodeURI(req.query.url as string);
  const code = req.query['h-captcha-response'];

  try {
    const verify = await httpClient({
      url: `https://hcaptcha.com/siteverify?response=${code}&secret=${process.env.CAPTCHA_SERVER_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (verify.data.success) {
      setCaptchaCookie(req, res);
      redirect(res, path);
    } else {
      const reason = verify.data['error-codes'].join('.');
      logWarningInSentry('H-Captcha failed to verify response', {
        page: path,
        details: reason,
      });
      redirectForbidden(res, 'Blocked by Captcha');
    }
  } catch (e) {
    setCaptchaCookie(req, res);
    logErrorInSentry('H-Captcha error, passing through', {
      page: path,
      details: JSON.stringify(e),
    });
    redirect(res, path);
  }
  res.end();
};

export default verify;