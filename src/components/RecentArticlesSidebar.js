import React from "react";
//import { useStaticQuery, graphql } from "gatsby";

const RecentArticlesSidebar = () => {
/*   const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query RecentArticlesSidebarQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              featuredpost: { ne: true }
            }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              excerpt(pruneLength: 150, format: HTML)
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
  ); */
  return (
    <section className="section">
      <div className="container">
        <h2>
          <span className="section-title">Popular Articles</span>
        </h2>
      </div>
    </section>
  );
};

export default RecentArticlesSidebar;
