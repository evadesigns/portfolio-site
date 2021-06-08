import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`

const ProjectContainer = styled.div`
  margin: 10px;
  border: 2px solid #fff;
  padding: 10px;
  max-width: 400px;
  background: #ffffff;
  border-radius: 5px;
  color: #242943;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  h1 {
    color: #242943;
  }

  img {
    border-radius: 5px;
    max-width: 200px;
  }
`

const Body = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`

const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  h5 {
    color: #fff;
    background: #242943;
    width: fit-content;
    padding: 2px 5px;
    border-radius: 5px;
  }
`

const PortfolioPage = ({ pageContext: projects }) => {
  console.log(projects)

  if (!projects || projects.length === 0) return <div>loading...</div>
  return (
    <Layout>
      <Body>
        <h1>My Portfolio</h1>
        <ProjectsContainer>
          {projects.map(
            ({
              url,
              data: {
                properties: { Body, Name, Tags, Thumbnail },
              },
            }) => {
              return (
                <ProjectContainer>
                  <TagContainer>
                    {Tags.multi_select.map(({ name }) => (
                      <h5>{name}</h5>
                    ))}
                  </TagContainer>
                  <h1>{Name.title[0].plain_text}</h1>
                  {Thumbnail && Thumbnail.url ? (
                    <img src={Thumbnail.url} />
                  ) : null}
                  <p>{Body.rich_text[0].plain_text}</p>
                </ProjectContainer>
              )
            }
          )}
        </ProjectsContainer>
      </Body>
    </Layout>
  )
}

/* export const portfolioQuery = graphql`
  query notionData {
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
` */

export default PortfolioPage
