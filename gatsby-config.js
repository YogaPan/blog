const siteUrl = process.env.URL || 'https://galtz.netlify.app'

module.exports = {
  siteMetadata: {
    title: "Galtz's Blog",
    description: "Galtz's Blog",
    author: 'galtz0321@gmail.com',
    siteUrl
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: { isIconAfterHeader: true }
          },
          {
            resolve: 'gatsby-remark-table-of-contents',
            options: {
              exclude: 'Table of Contents',
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 3,
              className: 'table-of-contents'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
              escapeEntities: {}
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: { include: /assets/ }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "galtz's blog",
        short_name: 'galtz blog',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/brand.png'
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${__dirname}/src/config/typography`
      }
    },
    'gatsby-plugin-offline'
  ]
}
