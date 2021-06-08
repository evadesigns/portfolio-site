import React, { useMemo } from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
  padding: 50px 10px;
  max-width: 900px;
  margin: 0 auto;
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

const TagItem = styled.h4`
  color: #fff;
`

const PortfolioPage = ({
  pageContext: {
    data: { properties },
  },
}) => {
  const data = useMemo(() => {
    const { Body, Short_Desc, Name, Tags, Thumbnail } = properties
    return {
      Body: Body.rich_text[0].plain_text.split('\n'),
      Name: Name.title[0].plain_text,
      Short_Desc: Short_Desc.rich_text[0].plain_text,
      Tags: Tags.multi_select,
      Thumbnail: Thumbnail.url,
    }
  }, [properties])

  return (
    <Layout>
      <Banner title={data.Name} cta={false} subTitle={data.Short_Desc}>
        {data.Tags.map((tag, index) => (
          <>
            {' '}
            <TagItem>{tag.name}</TagItem>{' '}
            {data.Tags.length - 1 !== index && (
              <h4 style={{ color: '#8d82c4' }}> | </h4>
            )}
          </>
        ))}
      </Banner>
      <ProjectsContainer>
        <button onClick={() => (window.location.href = '/portfolio')}>
          Go Back
        </button>
        <br /> <br />
        {data.Body.map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

export default PortfolioPage
