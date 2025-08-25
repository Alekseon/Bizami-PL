import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import BlockContent from '@sanity/block-content-to-react';
import localize from '../components/localize';

const PrivacyPolicyStyled = styled.div`
  padding: 65px 20px 20px;

  ol {
    padding: 0px;
    li.noList {
      list-style: none;
      display: flex;
      .marker {
        padding: 0 20px;
      }
    }
    li.noListSnd {
      list-style: none;
      display: flex;
      margin-left: 40px;
      .marker {
        padding: 0 20px;
      }
    }
  }
  ul {
    margin-left: 40px;
  }

  a {
    color: var(--black);
    font-weight: 400;
    padding: 0;
    cursor: pointer;
  }
  @media (min-width: 769px) {
    padding: 152px 60px 25px;
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 38px;
    }
  }
`;

export default localize(PrivacyPolicy);

function PrivacyPolicy({ data, pathContext }) {
  let curretnFstLevel = 0;
  let currntSndLevel = 0;
  const policy = data.privacyPolicy.nodes;

  const serializers = {
    types: {
      block: (props) => {
        if (props.node.style !== 'normal') {
          curretnFstLevel = 0;
          currntSndLevel = 0;
        }
        return BlockContent.defaultSerializers.types.block(props);
      },
    },
    listItem: (props) => {
      if (props.node.listItem === 'number' && props.node.level === 1) {
        curretnFstLevel++;
        return (
          <li className="noList">
            <span className="marker">{curretnFstLevel}.</span>{' '}
            <span>{props.children}</span>
          </li>
        );
      }
      if (props.node.listItem === 'number' && props.node.level !== 1) {
        currntSndLevel++;
        return (
          <li className="noListSnd">
            <span className="marker">{currntSndLevel}.</span>
            <span>{props.children}</span>
          </li>
        );
      } else if (props.node.listItem === 'bullet') {
        return <li>{props.children}</li>;
      } else {
        curretnFstLevel = 0;
        currntSndLevel = 0;
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
  };

  const input = policy.map((items) =>
    items._rawDescriptionT.map((item, index) => (
      <BlockContent key={index} blocks={item} serializers={serializers} />
    ))
  );

  return (
    <>
      <PrivacyPolicyStyled>{input}</PrivacyPolicyStyled>
      <Footer locale={pathContext.locale} data={data.sanityFooter} />
    </>
  );
}

export const query = graphql`
  query {
    sanityFooter {
      descriptionT{
        _type
        pl
        en
      }
    }
    privacyPolicy: allSanityPrivacyPolicy {
      nodes {
        titleT{
          _type
          pl
          en
        }
        _rawDescriptionT
      }
    }
  }
`;
