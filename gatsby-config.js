module.exports = {
  siteMetadata: {
    title: `Scuba Diving in Punta Cana made easy`,
    description: `Scuba Dive in Punta Cana and the Dominican Republic with a certified instructor and smaller more personalized diving groups`,
    keywords: `scuba diving in punta cana, punta cana dive sites, punta cana scuba diving, punta cana excursions, diving punta cana`,
    url: `https://awesome-wescoff-283220.netlify.app`,
    author: `@GrandBayOfTheS1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-paypal`,
      options: {
        clientId: `AUGdviCz48u3xxms4oIKwXA6hOXcgAIFhF6O-2i2hD2Qg-_F-5KyzDeVbXlmvS5J5pxsMNYM_aHMJlRZ`,
        currency: `USD` 
      }
    },
    {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins:300,400,500,600,700`,
                    `Alegreya:ital,wght@0,400;0,700;1,400`,
                    `Yellowtail`      
                ], display: 'swap'       
            }
        },
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
