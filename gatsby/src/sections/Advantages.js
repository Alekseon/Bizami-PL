import React from 'react';
import styled from 'styled-components';
import listDot from '../assets/images/list_dot.svg';
import advantagesTop from '../assets/images/advantages_top.svg';
import { MediaStyles } from '../styles/MediaStyles';
import VideoTemplate from '../components/videotemplate';

const AdvantagesStyled = styled.section`
  @media (max-width: 768px) {
    position: relative;
    .advantages-top-decor {
      width: 100%;
      height: auto;
      object-fit: cover;

      img {
        width: 100%;
      }
    }
    .content {
      padding: 0px 20px;
    }
    .advantages-list {
      list-style-type: none;
      margin-bottom: 100px;
      padding-left: 65px;
      margin-top: 0;
      li {
        position: relative;
        &::before {
          content: '';
          background-size: 50px 57px;
          background-image: url(${listDot});
          background-repeat: no-repeat;
          position: absolute;
          left: -65px;
          top: -10px;
          width: 50px;
          height: 57px;
        }
        .title-marked {
          display: inline-block;
          margin-right: 7px;
          &::before {
            top: 15px;
            left: 10px;
          }
        }
        p {
          margin-top: 0;
          margin-bottom: 30px;
          font-size: 20px;
        }
      }
    }
  }
  @media (min-width: 769px) {
    position: relative;
    .advantages-top-decor {
      width: 100%;
      height: auto;
      object-fit: cover;
      img {
        width: 100%;
      }
    }
    .content {
      padding: 0 60px 50px;
    }
    .advantages-list {
      margin-top: 0;
      list-style-type: none;
      margin-bottom: 100px;
      padding-left: 100px;
      li {
        position: relative;
        &::before {
          content: url(${listDot});
          position: absolute;
          left: -85px;
          top: -10px;
          width: 24px;
          height: 24px;
        }
        .title-marked {
          display: inline-block;
          margin-right: 7px;
          &::before {
            left: 10px;
          }
        }
        p {
          margin-top: 0;
          margin-bottom: 30px;
          font-size: 24px;
        }
      }
    }
  }
`;

export default function Advantages({ data }) {
  return (
    
    <AdvantagesStyled id="advantages">
      
        
       
          
        
      <img
        className="advantages-top-decor"
        src={advantagesTop}
        alt=""
        width="1440"
        height="231"
      />
      
      <div className="content">
        {data.list &&
          data.list.map((list, index) => (
            <div key={`advantage-${index}`}>
              <h2 className="title-marked">{list.titleT}</h2>
              <ul className="advantages-list">
                {list.list &&
                  list.list.map((item, index) => (
                    <div key={`advantage-item-${index}`}>
                      <li>
                        <p>
                        <span className="title-marked accent">
                            {item.listItemTitleT}
                          </span>{' '}
                          {item.listItemDescT}
                          
                          
                        </p>
                      </li>
                    </div>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </AdvantagesStyled>
  );
}
