const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/courses.js")
  const res = await graphql(`
  query {
    allContentfulCorses {
      edges {
        node {
          id
          slug
          title
          shortDes
        }
      }
    }
  }
  `)

  res.data.allContentfulCorses.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        id: edge.node.id,
      },
    })
  })
}