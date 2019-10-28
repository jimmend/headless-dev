import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const FeaturedArticle = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query FeaturedArticleQuery {
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
    <section className="section featured-article">
      <div className="container">
        <h2><span className="section-title">Featured Article</span></h2>
        <div className="columns is-gapless horizontal-card">
          <div className="column card-image">
            <Img
              fluid={
                allMarkdownRemark.edges[0].node.frontmatter.image
                  .childImageSharp.fluid
              }
              alt="Photo"
              style={{
                position: "relative",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
              }}
            ></Img>
          </div>
          <div className="column is-white">
            <div className="card-content">
              <div className="super-title">
                <span className="super-title-text">{allMarkdownRemark.edges[0].node.frontmatter.maincategory}</span>
              </div>
              <div className="title">
                {allMarkdownRemark.edges[0].node.frontmatter.title}
              </div>
              <div className="author">
                BY {allMarkdownRemark.edges[0].node.frontmatter.author} |{" "}
                {allMarkdownRemark.edges[0].node.frontmatter.date}
              </div>
              <div
                className="excerpt"
                dangerouslySetInnerHTML={{
                  __html: allMarkdownRemark.edges[0].node.excerpt
                }}
              ></div>
              <div className="read-more">
                <Link
                  className=""
                  to={allMarkdownRemark.edges[0].node.fields.slug}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
