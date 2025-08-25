import React from 'react';
import wave from '../assets/images/benefits_wave.svg';
import { BenefitsStyles } from '../styles/BenefitsStyles';

export default function Benefits({ data }) {
  return (
    <section id="benefits">
      <BenefitsStyles>
        <img className="wave" src={wave} width="1440" height="234" alt="" />
        <div className="content">
          <h2>
            <span>{data.titleT}</span>
          </h2>
          {data.benefits && (
            <ul>
              {data.benefits.map((benefit, index) => (
                <li key={`benefit-${index}`}>
                  <h3>{benefit.brackets}</h3>
                  <h4>{benefit.descriptionT.split(/\r|\n/).map((item, index) => {
                    return <span key={`line-${index}`}>{item}</span>;
                  })}</h4>
                </li>
              ))}
            </ul>
          )}
        </div>
      </BenefitsStyles>
    </section>
  );
}
