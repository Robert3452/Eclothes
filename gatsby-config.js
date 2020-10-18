/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.development`
});

const { SERVER_URI } = process.env;

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `E-commerce clothes example`,
    description: `A commerce for found new clothes, fancy and confortable`,
    author: `@rojarodmeza`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "internal",
        url: `${SERVER_URI}/api/products`,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        name: `products`
      }
    },
  ],
}
