module.exports = {
  // Uncomment the line below for now when running yarn deploy
  // pathPrefix: `/centrico`,
  siteMetadata: {
    title: `Web and Mobile Development, and design firm - MVMNT`,
  },
  plugins: [
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
        trackingId: "UA-120210487-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sharp`,
  ],
}
