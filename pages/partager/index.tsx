import React from 'react';
import { qrCode } from 'components-ui/icon';
import TextWrapper from 'components-ui/text-wrapper';
import Page from '../../layouts';

const Partager: React.FC = () => {
  return (
    <Page
      small={true}
      title="Réutiliser ou partager l’Annuaire des Entreprises"
    >
      <TextWrapper>
        <h1>Réutilisations & partage</h1>
        <p>
          L’
          <a href="/comment-ca-marche">Annuaire des Entreprises</a> permet de
          facilement retrouver l’ensemble des informations publiques disponibles
          sur une entreprise, une association ou une administration.
          <br />
          Retrouvez sur cette page comment rendre ces données accessibles à vos
          utilisateurs et partenaires.
        </p>
        <p>Table des matières</p>
        <ul>
          <li>
            <a href="#link">
              Ajouter un lien vers une fiche entreprise sur son site web
            </a>
          </li>
          <li>
            <a href="#qr">Générer un QR code vers une fiche entreprise</a>
          </li>
          <li>
            <a href="#link-search">
              Aider à la saisie de numéro de Siret/Siren
            </a>
          </li>
          {/* <li>
            <a href="#search">
              Ajouter un champ d’auto complétion de numéro siren dans un
              formulaire
            </a>
          </li> */}
          <li>
            <a href="#browser-search-engine">
              Ajouter le moteur de recherche à votre navigateur
            </a>
          </li>
          <li>
            <a href="#api">
              Réutiliser les données de l’Annuaire des Entreprises
            </a>
          </li>
        </ul>
        <div>
          <h2 id="link">
            Ajouter un lien vers une fiche entreprise sur son site web
          </h2>
          <h3>Quand l’utiliser ?</h3>
          <p>
            En ajoutant un lien cliquable depuis un site web (site officiel
            d’une entreprise, annuaire d’entreprises etc.), n’importe quel
            visiteur peut retrouver rapidement les informations essentielles de
            l’entreprise.
          </p>
          <p>Le lien est disponible en deux couleurs :</p>
          <iframe
            width="300"
            height="70"
            style={{ border: 'none', maxWidth: '100%' }}
            src="https://annuaire-entreprises.data.gouv.fr/api/share/button/510973431"
          ></iframe>
          <div />
          <iframe
            width="300"
            height="70"
            style={{ border: 'none', maxWidth: '100%' }}
            src="https://annuaire-entreprises.data.gouv.fr/api/share/button/510973431?light=true"
          ></iframe>
          <h3>Comment ajouter un lien sur mon site ?</h3>
          <p>
            Il vous suffit d’intégrer l’iframe suivante sur votre site web, à
            l’endroit où vous voulez faire apparaitre le lien.
          </p>
          <p>
            Couleur bleu foncé :
            <code>
              {`
<iframe
  width="290"
  height="100"
  style="border: none; max-width: 100%;"
  src="https://annuaire-entreprises.data.gouv.fr/api/share/button/SIREN_OR_SIRET"
></iframe>
                  `}
            </code>
          </p>
          <p>
            Couleur blanc :
            <code>
              {`
<iframe
  width="290"
  height="100"
  style="border: none; max-width: 100%;"
  src="https://annuaire-entreprises.data.gouv.fr/api/share/button/SIREN_OR_SIRET?light=true"
></iframe>
                  `}
            </code>
          </p>
          <p>
            <b>Attention :</b> pensez à bien renseigner{' '}
            <code>SIREN_OR_SIRET</code> avec le siren ou le siret pour lequel
            vous voulez créer un lien !
          </p>
          <h2 id="qr">Générer un QR code vers une fiche entreprise</h2>
          <h3>Quand l’utiliser ?</h3>
          <p>
            Si vous êtes un professionel, insérer dans vos factures ou vos
            couriers un QR code vers votre page de l’Annuaire, vous permettra
            d’apporter toutes les informations légales nécessaires.
          </p>
          <p>Voici un exemple de QR code :</p>
          <img alt="exemple de QR code" src="/images/QR_code_example.jpeg" />
          <h3>Comment générer un QR code ?</h3>
          <p>
            Vous pouvez générer un lien{' '}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://fr.wikipedia.org/wiki/Code_QR"
            >
              QR code
            </a>
            , scannable par téléphone, <b>depuis chaque fiche entreprise</b> :
            <ul>
              <li>
                Allez sur le <a href="/">moteur de recherche</a>
              </li>
              <li>Trouvez l’entreprise et accédez à sa fiche</li>
              <li>
                Cliquez en haut à droite de la page, sur le petit logo{' '}
                <span>{qrCode}</span>
              </li>
              <li>Sauvegardez le QR code ainsi généré</li>
              <li>Ajoutez-le à vos documents !</li>
            </ul>
          </p>
          <h2 id="link-search">
            Aider à la saisie de numéro de siren ou siret
          </h2>
          <h3>Quand l’utiliser ?</h3>
          <p>
            Si votre site internet, public ou privé, demande des informations
            liées à une personne morale dans un formulaire (par exemple, le
            siret ou le siren), vous pouvez fluidifier l’expérience utilisateur
            et limiter les erreurs de saisie, en invitant à retrouver les
            informations demandées grâce à{' '}
            <a href="/">notre moteur de recherche</a>.
          </p>
          <h3>Comment faire ?</h3>
          <p>
            Sur votre site, ajoutez en dessous ou à côté du champ de saisie un
            lien cliquable sur ce modèle :
            <br />
            <code>
              {`
<a href="https://annuaire-entreprises.data.gouv.fr/">
  Retrouvez votre numéro sur siren sur l'Annuaire des
  Entreprises
</a>
            `}
            </code>
          </p>
          {/* <h2 id="search">
            Ajouter un champ d’auto complétion de numéro siren dans un
            formulaire
          </h2>
          <h3>Quand l’utiliser ?</h3>
          <p></p>
          <input
            type="text"
            className="fr-input"
            id="search-widget"
            style={{ width: '400px' }}
            placeholder="Recherchez une entreprise par son nom ou son adresse"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <script src="/search-widget/index.js" nomodule="" defer></script>
          `,
            }}
          />
          <h3>Comment faire ?</h3>
          <p></p> */}
          <h2 id="browser-search-engine">
            Ajouter le moteur de recherche à votre navigateur
          </h2>
          <h3>Quand l’utiliser ?</h3>
          <p>
            Si vous utilisez fréquement la recherche d’entreprises, vous pouvez
            paramétrer votre navigateur pour que l’Annuaire des Entreprises
            apparaisse dans votre liste de moteurs de recherche.
          </p>
          <div>
            <img
              style={{ width: '100%' }}
              alt="exemple de liste de moteurs de recherche"
              src="/images/Browser_example.png"
            />
          </div>
          <h3>Comment faire ?</h3>
          <p>
            La configuration varie d’un navigateur à l’autre. Elle se fait soit
            depuis la barre de recherche soit dans les paramètres.
          </p>
          <h2 id="api">Réutiliser les données de l’Annuaire des Entreprises</h2>
          <p>
            Toutes les données utilisées sur l’Annuaire des Entreprises sont
            librement accessibles par API. Consultez la page{' '}
            <a href="/administration">statut des API</a> pour en savoir plus.
          </p>
        </div>
      </TextWrapper>
    </Page>
  );
};

export default Partager;
