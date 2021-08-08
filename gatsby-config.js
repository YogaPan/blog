const path = require('path')

const siteUrl = process.env.URL || 'https://galtz.netlify.app'
const sitemap = path.join(siteUrl, 'sitemap.xml')
const siteMetadata = {
  title: "Galtz's Blog",
  description: "Galtz's Blog",
  author: 'galtz0321@gmail.com',
  siteUrl
}

// const feedQuery = `
//   {
//     allMdx(
//       filter: { frontmatter: { draft: { ne: true } } }
//       sort: {
//         order: DESC,
//         fields: [frontmatter___date]
//       }
//       limit: 1000,
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//           }
//           fields {
//             slug
//           }
//           excerpt
//           html
//         }
//       }
//     }
//   }
// `

// const feedPluginOptions = {
//   feeds: [
//     {
//       serialize: ({ query: { site, allMdx } }) =>
//         allMdx.edges.map(({ node }) => ({
//           ...node.frontmatter,
//           description: node.frontmatter.description || node.excerpt,
//           url: site.siteMetadata.siteUrl + node.fields.slug,
//           guid: site.siteMetadata.siteUrl + node.fields.slug,
//           custom_elements: [{ 'content:encoded': node.html }]
//         })),
//       query: feedQuery,
//       output: 'rss.xml'
//     }
//   ]
// }

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: feedPluginOptions
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: 'https://ravens-blog.ghost.io',
        contentApiKey: '4921266f7731fe92fdd37778f8'
      }
    },
    {
      resolve: 'gatsby-transformer-rehype',
      options: {
        filter: node => node.internal.type === 'GhostPost',
        source: node => node.html,
        contextFields: [],
        fragment: true,
        space: 'html',
        emitParseErrors: false,
        verbose: false,
        plugins: [
          {
            resolve: 'gatsby-rehype-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
              escapeEntities: {}
            }
          }
          // {
          //   resolve: 'gatsby-rehype-inline-images',
          //   options: {
          //     withWebp: true,
          //     useImageCache: true
          //   }
          // }
        ]
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-ghost-images',
      options: {
        lookup: [
          { type: 'GhostPost', imgTags: ['feature_image'] },
          { type: 'GhostPage', imgTags: ['feature_image'] },
          { type: 'GhostSettings', imgTags: ['cover_image'] }
        ],
        exclude: node => node.ghostId === undefined,
        verbose: true,
        disable: false
      }
    },
    // {
    //   resolve: 'gatsby-plugin-mdx',
    //   options: {
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: { maxWidth: 1200 }
    //       },
    //       {
    //         resolve: 'gatsby-remark-autolink-headers',
    //         options: { isIconAfterHeader: true }
    //       },
    //       {
    //         resolve: 'gatsby-remark-table-of-contents',
    //         options: {
    //           exclude: 'Table of Contents',
    //           tight: false,
    //           ordered: false,
    //           fromHeading: 1,
    //           toHeading: 3,
    //           className: 'table-of-contents'
    //         }
    //       },
    //       {
    //         resolve: 'gatsby-remark-prismjs',
    //         options: {
    //           classPrefix: 'language-',
    //           inlineCodeMarker: null,
    //           showLineNumbers: true,
    //           noInlineHighlight: false,
    //           escapeEntities: {}
    //         }
    //       }
    //     ]
    //   }
    // },
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
    'gatsby-plugin-remove-serviceworker'
  ]
}
