import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import NewsletterSignup from '../components/NewsletterSignup'
import FeaturedArticle from '../components/FeaturedArticle'

export const IndexPageTemplate = ({
  featuredStories,
}) => (
    <div>
      <div className="">
        <div className="">
          <NewsletterSignup />
          <FeaturedArticle />
        </div>
      </div>
    </div>
  )

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  featuredStories: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        featuredStories={frontmatter.featuredStories}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        featuredStories {
          title
          text
        }
      }
    }
  }
`
