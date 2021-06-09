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

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  padding: 20px;
`

const TagItem = styled.h4`
  color: #fff;
`

const PeachesPage = () => {
  const data = useMemo(() => {
    return JSON_DATA.projects.find(
      prj =>
        prj.name
          .toLowerCase()
          .split(' ')
          .join('-') === 'peaches-app-redesign'
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
        <h1>Background</h1>
        <p>
          Over one year has passed since the first lockdown started in England.
          As most of us stayed home, we began to develop behaviours that were
          different from our regular lifestyles. Closed restaurants may have
          forced us to cook more and we may have walked less. One thing,
          however, had its absolute prime time – online shopping. With websites,
          such as Amazon buying even the most eccentric products had never been
          so easy.
        </p>
        <p>
          I admit that my guilty pleasure during lockdown was clothes shopping.
          At first, I was planning what I was going to wear when restrictions
          get lifted, but after a year most of my purchases were leggings and
          loungewear. As a connoisseur of many clothing apps, I was an active
          “tester” of user interfaces for those apps. While some apps made my
          experience easy, and therefore encouraged me to spend more money and
          buy from the same app again, I realised how important the right UX
          style is while creating a clothing app. Coincidentally, at the
          beginning of my UX journey, I created an app for selling clothes,
          which was loosely inspired by one of the apps I was using at the time.
          After a few long months (and many shopping sprees later), I took
          another look at the app and discovered that while it was mostly
          consistent with the user interfaces I observed during lockdown, I
          already knew which features I found particularly inconvenient.
        </p>
        <h1>Problem</h1>
        <BlogImage src="/problem.png" />
        <p>
          My app, called Peaches, originally had a hamburger menu placed in the
          top left corner and a main menu on the top right, alike many other
          apps of the same sort. After using my phone to order clothes in bed
          (and many phone-falling-on-face incidents), I realised that my thumb
          does not naturally reach the top of my phone. According to the
          principles of the thumb zone, our most natural thumb placement lies
          mostly on the bottom of the screen, which my first design did comply
          with. The hamburger menu used in my design, also did not perform well.
          Like in a famous clothing brand’s app, H&M, the problem was that if
          the menu was active, all the other features of the app and even the
          icons on the main page were hidden. The only way to go back to the
          main page was to click away, and then we could easily forget the
          categories and menu items and the UI appeared very unclear.
        </p>
        <p>
          Another problem that I discovered while researching clothing apps, as
          well as my own, was the size of buttons. The padding on clickable
          icons was so small that it required more precision than an average
          consumer has the patience for. I also checked my colour scheme in
          terms of web accessibility in mind and the contract between the
          “peachy” orange (#FEB79E) and background white was only 1.68:1, which
          indicated that the colour contract failed in all text sizes, in both
          WCAG AA and WCAG AAA criterions.
        </p>
        <h1>Solution and goals</h1>
        <BlogImage src="/solution.png" />
        <p>
          In my app redesign, I implemented a bottom menu, which is easily
          accessible from all pages and only left the search button on top, so
          that it is easy to find. Instead of a hamburger menu, I used
          horizontal scrolling for categories and added icons, which I made
          according to the app’s style. The categories are implemented on the
          first page, along with all the promotions that can catch the user’s
          attention. I added more padding to the icons, but less stroke, which
          made the icons easier to click on.
        </p>
        <p>
          I made important buttons, such as “Log in” and “Create an account”
          bigger to emphasise their importance and I added clearer options for
          login using Google and Facebook. My goal was to make creating an
          account as efficient as possible. I deleted the company logo from the
          login page and instead used it on all pages to create a cohesive user
          experience.
        </p>
        <p>
          I changed the main colours of the app, focusing on the web
          accessibility index to create a more inclusive design. I picked
          off-black and off-white to lessen the strain on the users’ eyes and
          changed the peachy colour to a deeper pink (#DB0A5A), with a contrast
          ratio of 4.64:1. I also added a shopping basket and made one of the
          categories interactable, so that the objective of the app could be
          clear to the user. I also added stock photos to make the design more
          realistic and appealing to the eye.
        </p>
      </ProjectsContainer>
    </Layout>
  )
}

export default PeachesPage
