import React from 'react';
import FAQLink from '#components-ui/faq-link';
import { Loader } from '#components-ui/loader';
import FrontStateMachine from '#components/front-state-machine';
import { CopyPaste } from '#components/table/simple';

const TVACell: React.FC<{}> = ({}) => {
  const Unknown = (
    <i>
      <FAQLink
        to="/faq/tva-intracommunautaire"
        tooltipLabel="Numéro de TVA inconnu ou structure non assujettie à la TVA"
      >
        Que signifie “inconnu ou non-assujettie à la TVA” ?
      </FAQLink>
    </i>
  );
  return (
    <FrontStateMachine
      id="tva-cell-wrapper"
      states={[
        Unknown,
        <>
          <Loader />
          {/* 
            This whitespace ensure the line will have the same height as any written line
            It should avoid content layout shift for SEO
          */}
          &nbsp;
        </>,
        <CopyPaste shouldTrim={true} id="tva-cell-result">
          Unknown
        </CopyPaste>,
        <i>
          Le téléservice du VIES ne fonctionne pas actuellement. Merci de
          ré-essayer plus tard.
        </i>,
      ]}
    />
  );
};

export default TVACell;
