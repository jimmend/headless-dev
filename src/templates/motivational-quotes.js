import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const motivationalQuotesQuery = graphql`
  query MotivationalQuotesQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "quote" }
          tags: { eq: "motivational" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            tags
          }
          html
        }
      }
    }
  }
`;

const MotivationalQuotesPage = ({ data }) => {
  const { edges: quotes } = data.allMarkdownRemark;
  return (
    <Layout>
      <section>
        <div className="quotes">
          <h1>Best Motivational Quotes</h1>
          {quotes.map(({ node: quote }) => (
            <div className="quote">
              <div className="quote-title"><div dangerouslySetInnerHTML={{__html: quote.html}}></div></div>
              <div className="quote-author">-{quote.frontmatter.author}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

MotivationalQuotesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default MotivationalQuotesPage;
