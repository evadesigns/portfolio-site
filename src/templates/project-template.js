import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const ProjectContainer = styled.div`
  margin: 10px;
  border: 2px solid #fff;
  padding: 10px;
  max-width: 400px;
  background: #f2f2f2;
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

const PortfolioPage = props => {
  console.log(props)
  return <div>wooo</div>
  return (
    <Layout>
      <ProjectsContainer></ProjectsContainer>
    </Layout>
  )
}

export default PortfolioPage
