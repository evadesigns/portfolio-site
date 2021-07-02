import React, { useMemo } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { navigate } from 'gatsby'

const data = require('../../static/projects.json')

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`

const ProjectContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border: 2px solid #fff;
  max-width: 400px;
  background: #fff;
  border-radius: 5px;
  color: #242943;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: grid;

  &:hover {
    background: #f2f2f2;
    cursor: pointer;
  }

  h1 {
    color: #242943;
    font-size: 1.5rem;
  }

  img {
    border-radius: 5px;
    max-width: 330px;
    width: 100%;
    height: auto;
  }
`

const CTA = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h5 {
    color: #242943;
    margin: 0 5px 0 0;
    font-size: 1rem;
  }
  img {
    max-width: 50px;
    margin-left: 10px;
  }
`

const CardBody = styled.div``

const Body = styled.div`
  max-width: 1200px;
  margin: 50px auto 0 auto;
`

const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;

  h5 {
    color: #fff;
    background: #242943;
    width: fit-content;
    padding: 2px 5px;
    border-radius: 5px;
    height: fit-content;
  }
`

const PortfolioPage = () => {
  function getUrl(name) {
    return name
      .toLowerCase()
      .split(' ')
      .join('-')
  }

  return (
    <Layout>
      <Body>
        <h1>My Portfolio</h1>
        <ProjectsContainer>
          {data.projects.map(({ name, tags, thumbnail, desc }) => (
            <ProjectContainer onClick={() => navigate(getUrl(name))}>
              <TagContainer>
                {tags.map(tag => (
                  <h5>{tag}</h5>
                ))}
              </TagContainer>
              <CardBody>
                <h1>{name}</h1>
                <img src={thumbnail} />
                <p>{desc}</p>
              </CardBody>
              <CTA>
                <h5>View Project</h5>
                <img src="/forward.svg" />
              </CTA>
            </ProjectContainer>
          ))}
        </ProjectsContainer>
      </Body>
    </Layout>
  )
}

export default PortfolioPage
