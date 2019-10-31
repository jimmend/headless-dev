/*eslint-disable */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import NewsletterSignup from "../components/NewsletterSignup"
import RecentArticlesSidebar from "../components/RecentArticlesSidebar"

const BlogSidebar = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogSidebarQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              featuredpost: { eq: true }
            }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              excerpt(pruneLength: 400, format: HTML)
              html
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                author
                date(formatString: "MMMM D, YYYY")
                description
                maincategory
              }
            }
          }
        }
      }
    `
  );
  return (
    <div className="section blog-sidebar">
      <NewsletterSignup />
      <RecentArticlesSidebar />
    </div>
  );
};

export default BlogSidebar;