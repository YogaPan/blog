const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type !== 'Mdx') return
  const value = createFilePath({ node, getNode })
  createNodeField({ name: 'slug', node, value })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              draft
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  let { edges } = result.data.allMdx
  if (process.env.NODE_ENV === 'production')
    edges = edges.filter(({ node }) => !node.frontmatter.draft)

  edges.forEach(({ node }) => {
    const { slug } = node.fields
    createPage({
      path: slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: { slug }
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, 'src'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@hooks': path.resolve(__dirname, 'src/common/hooks'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@images': path.resolve(__dirname, 'src/images')
      }
    }
  })
}
