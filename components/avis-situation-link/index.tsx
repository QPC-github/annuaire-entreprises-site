import React from 'react';

const AvisSituationLink: React.FC<{ siret: string; label?: string }> = ({
  siret,
  label,
}) => (
  <a
    target="_blank"
    rel="noopener noreferrer nofollow"
    href={`https://api.avis-situation-sirene.insee.fr/identification/pdf/${siret}`}
  >
    {label || 'Avis de situation'}
  </a>
);

export default AvisSituationLink;
