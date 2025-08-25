import styled from 'styled-components';

export const SectionHeroStyles = styled.div`
  padding: 15px 60px;
  width: 100%;
  background: var(--blue-light-1);
  position: relative;
  @media (max-width: 768px) {
    padding: 45px 20px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1320px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
    &-text {
      @media (min-width: 769px) {
        max-width: 580px;
        margin-right: 25px;
      }
      h2 {
        width: fit-content;
        @media (min-width: 769px) {
          margin-top: 0;
        }
      }
      p {
        white-space: pre-wrap;
      }
      span {
        &.h5 {
          display: block;
          font-weight: 400;
          @media (max-width: 768px) {
            position: absolute;
            top: 0;
            left: 64px;
            right: 20px;
            min-height: 80px;
            display: flex;
            align-items: center;
          }
        }
        &.title-marked {
          @media (max-width: 768px) {
            margin-top: 15px;
          }
          &::before {
            opacity: 0.6;
            left: 10px;
          }
        }
      }
    }
  }
  img {
    &.sygnet {
      width: min(10vw, 159px);
      @media (max-width: 1024px) {
        align-self: flex-start;
        height: auto;
      }
      @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 20px;
        width: 36px;
      }
    }
    &.icon {
      margin-left: auto;
      width: min(35vw, 390px);
      @media (max-width: 768px) {
        margin-right: auto;
        height: auto;
        width: min(75vw, 320px);
      }
    }
  }
`;