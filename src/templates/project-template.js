import React, { useMemo } from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
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

const PortfolioPage = ({
  pageContext: {
    data: { properties },
  },
}) => {
  const data = useMemo(() => {
    const { Body, Name, Tags, Thumbnail } = properties
    return {
      Body: Body.rich_text[0].plain_text,
      Name: Name.title[0].plain_text,
      Tags,
      Thumbnail: Thumbnail.url,
    }
  }, [properties])

  return (
    <Layout>
      <Banner title={data.Name} cta={false} subTitle={data.Body} />
      <ProjectsContainer></ProjectsContainer>
    </Layout>
  )
}

export default PortfolioPage
