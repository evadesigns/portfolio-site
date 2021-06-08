import React from 'react'

const Banner = ({
  title = 'Hi, my name is Eva',
  subTitle = 'I am a passionate and proactive designer interested in UX.',
  cta = true,
}) => (
  <section id="banner" className="major">
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
  </section>
)

export default Banner
