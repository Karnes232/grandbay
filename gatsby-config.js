module.exports = {
  siteMetadata: {
    title: `Scuba Diving in Punta Cana made easy`,
    description: `Scuba Dive in Punta Cana and the Dominican Republic with a certified instructor and smaller more personalized diving groups`,
    keywords: `scuba diving in punta cana, punta cana dive sites, punta cana scuba diving, punta cana excursions, diving punta cana`,
    url: `https://www.grandbay-puntacana.com`,
    siteUrl: `https://www.grandbay-puntacana.com`,
    author: `@GrandBayOfTheS1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-paypal`,
      options: {
        clientId: `AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0`,
        currency: `USD` 
      }
    },
    {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
 // Google Analytics / GA
          "AW-482060503", // Google Ads / Adwords / AW
// Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
