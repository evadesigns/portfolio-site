import React from 'react'
import { Link, navigate } from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import styled from 'styled-components'

const Container = styled.div`
  padding: 50px 10px;
  max-width: 900px;
  margin: 0 auto;
`

const LikesAndDislikes = styled.ul`
  list-style: none;
`

function About() {
  return (
    <Layout>
      <Banner
        cta={false}
        title="About Me"
        subTitle="Who I am and what I am currently up to."
      />
      <Container>
        <button onClick={() => (window.location.href = '/')}>Go Back</button>{' '}
        <br /> <br />
        <p>
          Hello, Iโm Eva! Iโm a UK-based UX designer (born and raised in
          Poland!) and I currently live in Sheffield.
        </p>
        <p>
          Why UX design? Living in three different countries (Poland, United
          Kingdom, and China!) taught me that people can be very different from
          each other, but we still have the same hopes and dreams. UX design is
          designing for inclusivity, for everyone to enjoy (except cats, cats
          donโt care).
        </p>
        <h5>Things I like</h5>
        <LikesAndDislikes>
          <li>๐ Watermelon</li>
          <li>๐ Cats</li>
          <li>๐ถ Dogs</li>
          <li>๐ก Making houses in The Sims</li>
        </LikesAndDislikes>
        <h5>
          Things I <em>don't</em> like
        </h5>
        <LikesAndDislikes>
          <li>๐ง๏ธ Rain</li>
          <li>๐ Sundays</li>
          <li>โ When I forget I made tea and now itโs cold</li>
          <li>7๏ธโฃ Odd numbers</li>
        </LikesAndDislikes>
      </Container>
    </Layout>
  )
}

export default About
