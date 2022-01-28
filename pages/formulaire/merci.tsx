import React from 'react';
import ButtonLink from '../../components/button';
import { Header } from '../../components/header';

const Thanks: React.FC = () => {
  return (
    <div id="layout">
      <Header />
      <main>
        <div className="layout-center">
          <h1>Merci beaucoup 🙂 !</h1>
        </div>
        <br />
        <br />
        <div className="layout-center">
          <ButtonLink to="/">Retourner au moteur de recherche</ButtonLink>
        </div>
      </main>
    </div>
  );
};

export default Thanks;