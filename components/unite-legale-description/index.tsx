import React from 'react';
import { estActif } from '#models/etat-administratif';
import { IUniteLegale } from '#models/index';
import { estDiffusible } from '#models/statut-diffusion';
import { formatDateLong } from '#utils/helpers';

export const UnitLegaleDescription: React.FC<{ uniteLegale: IUniteLegale }> = ({
  uniteLegale,
}) => {
  const { nombreEtablissements, nombreEtablissementsOuverts, usePagination } =
    uniteLegale.etablissements;

  const hasOpenEtablissements = nombreEtablissementsOuverts > 0;

  const plural = nombreEtablissements > 1 ? 's' : '';
  const pluralBe = nombreEtablissementsOuverts > 1 ? 'sont' : 'est';

  return (
    <p>
      <>L’unité légale {uniteLegale.nomComplet}</>{' '}
      {uniteLegale.dateCreation && (
        <>
          a été créée le <b>{formatDateLong(uniteLegale.dateCreation)}</b>.{' '}
        </>
      )}
      {uniteLegale.dateDebutActivite && !estActif(uniteLegale) && (
        <>
          Elle a été fermée le{' '}
          <b>{formatDateLong(uniteLegale.dateDebutActivite)}</b>.{' '}
        </>
      )}
      {uniteLegale.natureJuridique && (
        <>
          Sa forme juridique est <b>{uniteLegale.libelleNatureJuridique}</b>.{' '}
        </>
      )}
      {uniteLegale.siege && uniteLegale.siege.adresse && (
        <>
          Son{' '}
          <a href={`/etablissement/${uniteLegale.siege.siret}`}>siège social</a>{' '}
          est domicilié au{' '}
          <a href={`/carte/${uniteLegale.siege.siret}`}>
            {uniteLegale.siege.adresse}
          </a>
          {'. '}
        </>
      )}
      {uniteLegale.etablissements.all && (
        <>
          Elle possède {nombreEtablissements} établissement{plural}
          {hasOpenEtablissements && !usePagination && (
            <b>
              {' '}
              dont{' '}
              <a href={`/entreprise/${uniteLegale.siren}#etablissements`}>
                {nombreEtablissementsOuverts} {pluralBe} en activité
              </a>
            </b>
          )}
          .
        </>
      )}
    </p>
  );
};
