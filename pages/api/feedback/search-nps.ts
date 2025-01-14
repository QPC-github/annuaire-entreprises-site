import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { logEventInMatomo } from '#utils/analytics/matomo';
import logErrorInSentry from '#utils/sentry';

const logSearchNps = async (req: NextApiRequest) => {
  try {
    const today = new Date();

    const hasFound = req.query.value === '1';
    const query = req.query.searchTerm;

    await logEventInMatomo(
      'feedback:search-nps',
      hasFound.toString(),
      `value=${hasFound}&date=${
        today.toISOString().split('T')[0]
      }&query=${query}`,
      'nps'
    );
  } catch (e: any) {
    logErrorInSentry('Error in form submission', { details: e.toString() });
  }
};

export default nextConnect<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    // we choose not to await as we dont want to stall the request if any logEvent fails
    logSearchNps(req);
    res.status(200).end();
  }
);
