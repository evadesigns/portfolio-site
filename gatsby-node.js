const path = require(`path`)
const fs = require('fs')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allNotionPage {
        nodes {
          id
          properties {
            Tags {
              multi_select {
                name
              }
            }
            Thumbnail {
              url
            }
            Body {
              rich_text {
                plain_text
              }
            }
            Name {
              title {
                plain_text
              }
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Access query results via object destructuring
  const { allNotionPage } = result.data

  const pageTemplate = path.resolve(`./src/templates/project-template.js`)

  const formattedNodes = []

  allNotionPage.nodes.forEach(node => {
    if (node.properties.Name && node.properties.Name.title.length > 0) {
      const url = `/portfolio/${node.properties.Name.title[0].plain_text
        .toLowerCase()
        .split(' ')
        .join('-')}`

      const ctx = {
        data: node,
        url,
      }
      formattedNodes.push(ctx)
      createPage({
        path: url,
        component: pageTemplate,
        context: ctx,
      })
    }
  })

  createPage({
    path: `/portfolio`,
    component: path.resolve(`./src/templates/projects-template.js`),
    context: [...formattedNodes],
  })
}
