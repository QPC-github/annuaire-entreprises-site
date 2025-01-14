import React from 'react';
import {
  facebook,
  linkedin,
  qrCode,
  twitter,
  print,
  mail,
} from '#components-ui/icon';
import InformationTooltip from '#components-ui/information-tooltip';
import { PrintNever } from '#components-ui/print-visibility';
import { IUniteLegale } from '#models/index';

const SocialMedia: React.FC<{ uniteLegale: IUniteLegale }> = ({
  uniteLegale: { siren, nomComplet },
}) => (
  <PrintNever>
    <div className="social-media layout-right">
      <span>
        <InformationTooltip
          orientation="right"
          label="Partager cette page sur Linkedin"
        >
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://annuaire-entreprises.data.gouv.fr/entreprise/${siren}`}
            rel="noreferrer noopener"
            target="_blank"
            title="Partager cette page sur linkedin"
            className="no-style-link"
          >
            {linkedin}
          </a>
        </InformationTooltip>
      </span>
      <span>
        <InformationTooltip
          orientation="right"
          label="Partager cette page sur Twitter"
        >
          <a
            href={`https://twitter.com/intent/tweet?url=https://annuaire-entreprises.data.gouv.fr/entreprise/${siren}`}
            rel="noreferrer noopener"
            target="_blank"
            title="Partager cette page sur twitter"
            className="no-style-link"
          >
            {twitter}
          </a>
        </InformationTooltip>
      </span>
      <span>
        <InformationTooltip
          orientation="right"
          label="Partager cette page sur Facebook"
        >
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://annuaire-entreprises.data.gouv.fr/entreprise/${siren}`}
            rel="noreferrer noopener"
            target="_blank"
            title="Partager cette page sur Facebook"
            className="no-style-link"
          >
            {facebook}
          </a>
        </InformationTooltip>
      </span>
      <span>
        <InformationTooltip
          orientation="right"
          label="Partager cette page par Email"
        >
          <a
            href={`mailto:?subject=A découvrir sur l’Annuaire des Entreprises, la page de ${nomComplet}&body=Je voudrais partager la page ${nomComplet} avec vous https://annuaire-entreprises.data.gouv.fr/entreprise/${siren}`}
            title="Partager cette page par Email"
            className="no-style-link"
          >
            {mail}
          </a>
        </InformationTooltip>
      </span>
      <span>
        <InformationTooltip
          label="Imprimer cette page ou la sauvegarder au format PDF"
          orientation="right"
        >
          <div id="print-icon">{print}</div>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              var openPrintAlert = function() { window.print() };
              document.getElementById("print-icon").onclick=openPrintAlert;
          `,
            }}
          ></script>
        </InformationTooltip>
      </span>
      <span>
        <InformationTooltip
          label="Télécharger un QR Code à inclure dans un courier ou dans un devis, pour partager cette page"
          orientation="right"
        >
          <a
            title="Partager cette page grâce à un QR Code"
            href={`/api/share/qr/${siren}`}
            download={`QR_code_page_${siren}.jpeg`}
            className="no-style-link"
          >
            {qrCode}
          </a>
        </InformationTooltip>
      </span>
    </div>
    <style jsx>{`
      .social-media span {
        margin: 0 5px;
      }
      .social-media span a,
      .social-media span div {
        cursor: pointer !important;
        padding: 8px;
      }
      .social-media span a:after {
        display: none;
      }
      .social-media {
        color: #000091;
        margin: 0 0 12px 0;
      }
    `}</style>
  </PrintNever>
);

export default SocialMedia;
