import React, { useMemo } from 'react'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'
import styled from 'styled-components'
const JSON_DATA = require('../../../static/projects.json')

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

const RedBubblePage = () => {
  const data = useMemo(() => {
    return JSON_DATA.projects.find(
      prj =>
        prj.name
          .toLowerCase()
          .split(' ')
          .join('-') === 'redbubble-illustrations'
    )
  }, [JSON_DATA])

  return (
    <Layout>
      <Banner title={data.name} cta={false} subTitle={data.desc}>
        {data.tags.map((tag, index) => (
          <>
            {' '}
            <TagItem>{tag.name}</TagItem>{' '}
            {data.tags.length - 1 !== index && (
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
        <p>
          {' '}
          Redbubble is a platform where designers can share their work and earn
          a small commission if an item with their design is sold.
        </p>
        <p>
          My designs on Redbubble incluse various collections, such as Vine
          references, products for dog lovers and contemporary designs.
        </p>
        <p>
          Every design can be printed on various products, such as T-shirts,
          bags and mugs.
        </p>
      </ProjectsContainer>
    </Layout>
  )
}

export default RedBubblePage
