import fetchAnnoncesBodacc from '../clients/open-data-soft/bodacc';
import { verifySiren } from '../utils/helpers/siren-and-siret';
import logErrorInSentry from '../utils/sentry';
import { EAdministration } from './administration';
import {
  APINotRespondingFactory,
  IAPINotRespondingError,
} from './api-not-responding';

export interface IAnnoncesBodacc {
  titre: string;
  sousTitre: string;
  typeAvisLibelle: string;
  tribunal: string;
  numeroAnnonce: number;
  datePublication: string;
  details: string;
  path: string;
}

const getAnnoncesBodaccFromSlug = async (
  slug: string
): Promise<IAnnoncesBodacc[] | IAPINotRespondingError> => {
  const siren = verifySiren(slug);
  try {
    return await fetchAnnoncesBodacc(siren);
  } catch (e) {
    logErrorInSentry(new Error('Error in API BODACC'), {
      siren,
      details: `${JSON.stringify(e)}`,
    });
    return APINotRespondingFactory(EAdministration.DILA, 500);
  }
};

export default getAnnoncesBodaccFromSlug;
