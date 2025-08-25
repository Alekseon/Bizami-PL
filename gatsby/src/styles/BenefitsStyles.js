import styled from 'styled-components';
import sygnetLeft from '../assets/images/sygnet_color_left.svg';
import sygnetRight from '../assets/images/sygnet_color_right.svg';

export const BenefitsStyles = styled.div`
  width: 100%;
  background: var(--blue-light-2);

  .wave {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .content {
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 60px 150px;
    @media (max-width: 768px) {
      padding: 0 20px 75px;
    }

    h2 {
      padding: 25px 10px;
      margin: 25px;
      width: fit-content;
      position: relative;
      @media (max-width: 768px) {
        text-align: center;
      }
      span {
        color: var(--white);
        position: relative;
        margin: 0 25px;
        display: block;
        z-index: 2;
      }
      &::before,
      &::after {
        content: '';
        background-color: var(--blue-dark-1);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
      }
      &::before {
        opacity: 0.4;
        transform: translate(-25px, -25px);
      }
      &::after {
        opacity: 0.8;
      }
    }
  }

  ul {
    width: fit-content;
    list-style: none;
    margin: 75px 50px 25px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #eff7fbb3;

    @media (max-width: 768px) {
      margin: 45px 0px 25px;
      padding-top: 25px;
    }

    li {
      width: 50%;
      padding: 25px;
      text-align: center;
      flex: 1 1 auto;
      @media (max-width: 768px) {
        width: 100%;
        padding: 0 0 15px;
      }

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before,
        &::after {
          content: '';
          display: block;
          width: 39px;
          height: 64px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        &::before {
          background-image: url(${sygnetLeft});
          margin-right: 20px;
        }
        &::after {
          background-image: url(${sygnetRight});
          margin-left: 20px;
        }
      }
    }
  }
`;
