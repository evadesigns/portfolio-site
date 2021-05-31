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

  fs.writeFileSync('data.json', JSON.stringify(result))

  // Check for any errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Access query results via object destructuring
  const { allNotionPage } = result.data

  const pageTemplate = path.resolve(`./src/templates/project-template.js`)

  allNotionPage.nodes.forEach(node => {
    console.log(node)
    if (node.Name && node.Name.title.length > 0) {
      createPage({
        path: `/portfolio/${node.Name.title[0].plain_text.toLowerCase()}`,
        component: pageTemplate,
        context: {
          id: node.id,
        },
      })
    }
  })

  createPage({
    path: `/portfolio`,
    component: path.resolve(`./src/templates/projects-template.js`),
  })
}
