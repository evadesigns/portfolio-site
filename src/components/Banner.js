import React from 'react'
import styled from 'styled-components'

const TagContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 1000;

  h4 {
    margin-right: 5px;
  }
`

const Banner = ({
  title = 'Hi, my name is Eva',
  subTitle = 'I am a passionate and proactive designer interested in UX.',
  cta = true,
  children,
}) => (
  <section id="banner" className="major" style={{ position: 'relative' }}>
    <div className="inner">
      <header className="major">
        <h1>{title}</h1>
      </header>
      <div className="content">
        <p>{subTitle}</p>
        {cta && (
          <ul className="actions">
            <li>
              <a href="/portfolio" className="button next scrolly">
                View Portfolio
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
    <TagContainer>{children}</TagContainer>
  </section>
)

export default Banner
