import React from 'react';

import { FullTable } from '../table/full';
import { EAdministration } from '../../models/administrations';
import { Section } from '../section';
import AdministrationNotResponding from '../administration-not-responding';
import { IAssociation } from '../../models';
import {
  IAPINotRespondingError,
  isAPINotResponding,
} from '../../models/api-not-responding';
import { IAnnoncesAssociation } from '../../models/annonces';
import { Tag } from '../../components-ui/tag';
import ButtonLink from '../../components-ui/button';
import { DILA } from '../administrations';
import routes from '../../clients/routes';
import { formatDate } from '../../utils/helpers/formatting';
import AssociationCreationNotFoundAlert from '../../components-ui/alerts/association-creation-not-found-alert';

const AnnoncesAssociationSection: React.FC<{
  uniteLegale: IAssociation;
  annoncesAssociation: IAnnoncesAssociation | IAPINotRespondingError;
}> = ({ uniteLegale, annoncesAssociation }) => {
  if (isAPINotResponding(annoncesAssociation)) {
    return (
      <AdministrationNotResponding
        administration={annoncesAssociation.administration}
        errorType={annoncesAssociation.errorType}
        title="Annonces Journal Officiel des Associations"
      />
    );
  }

  return (
    <Section
      title="Annonces Journal Officiel des Associations"
      sources={[EAdministration.DILA]}
      lastModified={annoncesAssociation.lastModified}
    >
      {annoncesAssociation.annonces.filter(
        (annonce) => annonce.typeAvisLibelle === 'Création'
      ).length === 0 && (
        <AssociationCreationNotFoundAlert uniteLegale={uniteLegale} />
      )}
      {annoncesAssociation.annonces.length === 0 ? (
        <div>
          Cette structure n’a aucune annonce publiée au{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={routes.journalOfficielAssociations.site.recherche}
          >
            Journal Officiel des Associations (JOAFE)
          </a>
          .
        </div>
      ) : (
        <>
          <p>
            Cette structure possède {annoncesAssociation.annonces.length}{' '}
            annonces publiées au{' '}
            <b>Journal Officiel des Associations (JOAFE)</b>
            , consolidé par la <DILA />. Pour en savoir plus, vous pouvez
            consulter{' '}
            <a
              rel="noreferrer noopener nofollow"
              target="_blank"
              href={`${routes.journalOfficielAssociations.site.recherche}?q=${uniteLegale.siren}`}
            >
              la page de cette association
            </a>{' '}
            sur le site du JOAFE&nbsp;:
          </p>
          <FullTable
            head={[
              'Publication',
              'N° parution',
              'Type d’annonce',
              'Justificatif de parution',
            ]}
            body={annoncesAssociation.annonces.map((annonce) => [
              <b>{formatDate(annonce.datePublication)}</b>,
              <Tag>{annonce.numeroParution}</Tag>,
              <div className="annonce">
                <b>{annonce.typeAvisLibelle}</b>
                <div className="font-small">
                  <i>{annonce.details}</i>
                </div>
              </div>,
              <ButtonLink target="_blank" to={annonce.path} alt small>
                ⇢&nbsp;Consulter
              </ButtonLink>,
            ])}
          />
        </>
      )}
      <style jsx>{`
        .annonce {
          margin: 5px 0;
        }
      `}</style>
    </Section>
  );
};

export default AnnoncesAssociationSection;