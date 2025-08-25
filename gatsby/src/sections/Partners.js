import React from 'react';
import styled from 'styled-components';
import partnersTop from '../assets/images/partners_top.svg';
import partnersTopMobile from '../assets/images/partners_top_mobile.svg';

const PartnersStyled = styled.section`
  @media (max-width: 768px) {
    padding: 120px 20px 50px 20px;
    background-color: var(--grey-light);
    text-align: center;
    position: relative;
    .partners-top-decor {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 20px;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 25px;
    }
    .logo-image {
      max-width: 100%;
      margin-bottom: 25px;
      display: block;
      img {
        max-width: 100%;
      }
    }
  }
  @media (min-width: 769px) {
    padding: 200px 60px 150px 60px;
    background-color: var(--grey-light);
    text-align: center;
    position: relative;
    .partners-top-decor {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 24px;
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 50px;
    }
    .logo-image {
      max-width: 100%;
      margin-bottom: 50px;
      display: block;
      img {
        max-width: 100%;
      }
    }
  }
`;

export default function Partners({ data }) {
  return (
    <PartnersStyled>
      <picture className="partners-top-decor">
        <source media="(max-width: 768px)" srcet={partnersTopMobile} />
        <source media="(min-width: 769px)" srcet={partnersTop} />
        <img src={partnersTop} alt="" />
      </picture>
      {data.partners &&
        data.partners.map((partner, index) => (
          <div key={`partner-${index}`}>
            <span>{partner.descriptionT.split(/\r|\n/).map((item, index) => {
              return <p key={`line-${index}`}>{item}</p>;
            })}</span>
            <picture className="logo-image">
              <img src={partner.image.asset.url} alt="partner-logo" />
            </picture>
          </div>
        ))}
    </PartnersStyled>
  );
}
