import React from 'react';
import {
  administrationsMetaData,
  EAdministration,
} from '../../models/administration';
import DataSourceTooltip from '../information-tooltip/data-source-tooltip';

interface ISectionProps {
  title: string;
  width?: number;
  source?: EAdministration;
  id?: string;
}

export const Section: React.FC<ISectionProps> = ({
  id,
  children,
  title,
  source,
  width = 100,
}) => {
  const dataSource = source ? administrationsMetaData[source] : undefined;
  return (
    <>
      <div className="section-container" id={id}>
        <h2>{title}</h2>
        <div>{children}</div>
        {dataSource && (
          <div className="data-source-tooltip-wrapper">
            <DataSourceTooltip dataSource={dataSource} />
          </div>
        )}
      </div>
      <style jsx>{`
        .section-container {
          border: 2px solid #dfdff1;
          border-radius: 2px;
          position: relative;
          margin: 10px 0 10px;
          padding: 1rem;
          width: ${width}%;
        }
        .section-container > h2 {
          margin-top: 0;
          display: inline-block;
          font-size: 1.1rem;
          line-height: 1.8rem;
          background-color: #dfdff1;
          color: #000091;
          padding: 0 7px;
          border-radius: 2px;
          max-width: calc(100% - 40px);
        }
        .data-source-tooltip-wrapper {
          display: flex;
          justify-content: flex-end;
        }
        @media only screen and (min-width: 1px) and (max-width: 900px) {
          .data-source-tooltip-wrapper {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};
