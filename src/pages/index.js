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
                backgroundImage: `url("/static/banner.svg")`,
                backgroundSize: 'contain',
              }}
            >
              <Link to="/" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url("/static/design.jpg")` }}>
              <header className="major">
                <h3>My Latest Work</h3>
                <p>feugiat amet tempus</p>
              </header>
            </article>
            <article style={{ backgroundImage: `url("/static/desk.jpg")` }}>
              <header className="major">
                <h3>Illustrations</h3>
                <p>Lorem etiam nullam</p>
              </header>
            </article>
            <article style={{ backgroundImage: `url("/static/coffee.jpg")` }}>
              <header className="major">
                <h3>UX Design</h3>
                <p>Nisl sed aliquam</p>
              </header>
            </article>
            <article style={{ backgroundImage: `url("/static/desk2.jpg")` }}>
              <header className="major">
                <h3>About Me</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
            </article>
            <article style={{ backgroundImage: `url("/static/design.jpg")` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
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
