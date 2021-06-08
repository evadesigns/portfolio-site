module.exports = {
  siteMetadata: {
    title: 'Eva Designs',
    author: 'Eva Bienasz',
    description: 'Product & UX Design by Eva Bienasz',
    siteUrl: 'https://evadesigns.github.io/portfolio-site',
  },
  plugins: [
    'gatsby-plugin-styled-components',
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
