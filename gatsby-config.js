module.exports = {
  siteMetadata: {
    title: `Leroy Nas`,
    description: `This is the portfolio of Leroy Nas.`,
    author: `Leroy Nas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3B82F6`,
        theme_color: `#3B82F6`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
