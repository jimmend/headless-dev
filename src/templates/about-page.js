import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import NewsletterSignUp from "../components/NewsletterSignup";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  imageInfo
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section className="section about">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <h2>
                <span className="section-title">{title}</span>
              </h2>
              <PreviewCompatibleImage imageInfo={imageInfo} />
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <NewsletterSignUp postId="about" />
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  imageInfo: PropTypes.object
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        imageInfo={post.frontmatter}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 175, height: 175) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
