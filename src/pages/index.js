import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Eva Designs"
          meta={[{ name: 'designs', content: 'designs' }]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article
              id="first-tile"
              style={{
                backgroundImage: `url("/banner.svg")`,
                backgroundSize: 'contain',
              }}
            >
              <Link to="/" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url("/peaches.png")` }}>
              <header className="major">
                <h3>My Latest Work</h3>
                <p>Peaches Redesign | Figma</p>
              </header>
            </article>
            <article style={{ backgroundImage: `url("/desk.jpg")` }}>
              <header className="major">
                <h3>Illustrations</h3>
                <p>Illustration projects I have worked on</p>
              </header>
            </article>
            <article style={{ backgroundImage: `url("/coffee.jpg")` }}>
              <header className="major">
                <h3>UX Design</h3>
                <p>UX Design projects I have worked on</p>
              </header>
            </article>
            <article style={{ backgroundImage: `url("/about.jpg")` }}>
              <header className="major">
                <h3>About Me</h3>
                <p>Everything about me and my journey so far</p>
              </header>
            </article>
            <article style={{ backgroundImage: `url("/contact.jpg")` }}>
              <header className="major">
                <h3>Contact Me</h3>
                <p>Where to find me and how to get in touch</p>
              </header>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
