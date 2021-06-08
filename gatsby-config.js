module.exports = {
  siteMetadata: {
    title: 'Eva Designs',
    author: 'Eva Bienasz',
    description: 'Product & UX Design by Eva Bienasz',
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-db`,
      options: {
        token: 'secret_5MaKaF4kPfPhHbKdaPeoyBXf7OkVA4ZLufLEUmAyACh',
        databaseId: '8dfeb11d6db04c748d5ef47cfc2b6434',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'red',
        theme_color: 'red',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}