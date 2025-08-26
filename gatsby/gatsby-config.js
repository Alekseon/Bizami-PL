// gatsby-config.js (CommonJS dla Gatsby 2)
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  siteMetadata: {
    title: `Welcome to Bizami – Business Intelligence in Logistic`,
    siteUrl: "https://www.bizami.pl",
    description:
      "Odkryj nowe możliwości biznesowe z naszą platformą internetową. Oprogramowanie BIZAMI skupia się na precyzyjnym prognozowaniu popytu, optymalizacji procesów zakupowych, a także elastyczności w zarządzaniu zapasami. Sprawdź teraz!",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host:  'https://bizami.pl/',
        sitemap: 'https://bizami.pl/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage(filter: {context: {locale: {eq: "pl"}}}) {
          edges {
            node {
              path
            }
          }
        }
      }
    `,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        resolvePages: ({ allSitePage }) =>
          allSitePage.edges.map(({ node }) => ({
            path: node.path,
          })),
        serialize: ({ path }) => ({
          url: path,
          changefreq: 'daily',
          priority: 0.7,
        }),
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "q46bplag",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KS8TGWGS",
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
};
