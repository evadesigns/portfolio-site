import React, { useMemo } from 'react'
import Layout from '../../components/layout'
import Banner from '../../components/banner'
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

const FlarePage = () => {
  const data = useMemo(() => {
    return JSON_DATA.projects.find(prj => prj.name.toLowerCase() === 'flare')
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
          Flare is a free, customisable UI component library for web design and
          Figma. It is perfect for creating web applications, dashboards and for
          UX design. It contains various ready-made components that can enhance
          the speed of the designing process.
        </p>
        <h5>The main types of components:</h5>
        <ul>
          <li>Buttons</li>
          <li>Sliders</li>
          <li>Toggle-switches</li>
          <li>Button groups</li>
          <li>Sign up and sign in pages</li>
          <li>Radio buttons</li>
          <li>Check boxes</li>
          <li>Text fields</li>
        </ul>
        <p>
          The UI components can also be copied in the form of code directly from
          the library (thanks to the kind web developer who made this possible).
        </p>
        <h5>Links & Demos</h5>
        <ul>
          <li>
            Buttons preview:{' '}
            <a href="http://bit.ly/flare_buttons_preview ">
              http://bit.ly/flare_buttons_preview{' '}
            </a>
          </li>

          <li>
            Buttons with hover state (artboards):{' '}
            <a href="http://bit.ly/flare_buttons ">
              http://bit.ly/flare_buttons{' '}
            </a>
          </li>

          <li>
            Button groups preview:
            <a href="http://bit.ly/flare_groups_preview">
              http://bit.ly/flare_groups_preview
            </a>{' '}
          </li>

          <li>
            Button with hover and clicked state (artboards):{' '}
            <a href="http://bit.ly/flare_groups">http://bit.ly/flare_groups</a>{' '}
          </li>

          <li>
            Sliders, action buttons, switches preview:{' '}
            <a href="http://bit.ly/flare_sliders_preview">
              http://bit.ly/flare_sliders_preview
            </a>{' '}
          </li>

          <li>
            Sliders artboard (with hover and click states):{' '}
            <a href="http://bit.ly/flare_sliders">
              http://bit.ly/flare_sliders
            </a>{' '}
          </li>

          <li>
            Login and sign-up page preview:{' '}
            <a href="http://bit.ly/flare_login_preview">
              http://bit.ly/flare_login_preview
            </a>{' '}
          </li>

          <li>
            Login and sign-up page artboards:{' '}
            <a href="http://bit.ly/flare_login">http://bit.ly/flare_login</a>{' '}
          </li>

          <li>
            Text boxes preview:{' '}
            <a href="http://bit.ly/flare_textbox_preview">
              http://bit.ly/flare_textbox_preview
            </a>
          </li>

          <li>
            Text boxes artboard (with hover and click states):{' '}
            <a href="http://bit.ly/flare_textbox">
              http://bit.ly/flare_textbox
            </a>
          </li>

          <li>
            Flare UI compiled artboard:{' '}
            <a href="http://bit.ly/flare_ui">http://bit.ly/flare_ui</a>
          </li>
        </ul>
      </ProjectsContainer>
    </Layout>
  )
}

export default FlarePage
