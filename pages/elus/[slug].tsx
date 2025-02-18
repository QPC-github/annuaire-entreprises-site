import { GetServerSideProps } from 'next';
import React from 'react';
import ElusSection from '#components/dirigeants-section/elus-section';
import Title, { FICHE } from '#components/title-section';
import { IUniteLegale } from '#models/index';
import { getUniteLegaleFromSlug } from '#models/unite-legale';
import extractParamsFromContext from '#utils/server-side-props-helper/extract-params-from-context';
import {
  IPropsWithMetadata,
  postServerSideProps,
} from '#utils/server-side-props-helper/post-server-side-props';
import Page from '../../layouts';

interface IProps extends IPropsWithMetadata {
  uniteLegale: IUniteLegale;
}

const ElusPage: React.FC<IProps> = ({ uniteLegale, metadata }) => {
  return (
    <Page
      small={true}
      title={`Élus de ${uniteLegale.nomComplet} - ${uniteLegale.siren}`}
      canonical={`https://annuaire-entreprises.data.gouv.fr/elus/${uniteLegale.siren}`}
      noIndex={true}
      isBrowserOutdated={metadata.isBrowserOutdated}
    >
      <div className="content-container">
        <Title uniteLegale={uniteLegale} ficheType={FICHE.ELUS} />
        <ElusSection uniteLegale={uniteLegale} />
      </div>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = postServerSideProps(
  async (context) => {
    const { slug } = extractParamsFromContext(context);
    const uniteLegale = await getUniteLegaleFromSlug(slug);

    return {
      props: { uniteLegale },
    };
  }
);

export default ElusPage;
