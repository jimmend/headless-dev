import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <article className="blogroll-item">
              <div className="columns is-gapless horizontal-card">
                <div className="column is-5-widescreen is-5-desktop is-6-tablet card-image">
                  <PreviewCompatibleImage
                    imageInfo={post.frontmatter}
                    orientation="landscape"
                    hAlign="right"
                    vAlign="top"
                  />
                </div>
                <div className="column is-white">
                  <div className="card-content">
                    <div className="super-title">
                      <span className="super-title-text">
                        {post.frontmatter.maincategory}
                      </span>
                    </div>
                    <div className="title">{post.frontmatter.title}</div>
                    <div className="author">
                      BY {post.frontmatter.author} | {post.frontmatter.date}
                    </div>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description
                      }}
                    ></div>
                    <div className="read-more">
                      <Link className="" to={post.fields.slug}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                author
                maincategory
                description
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
