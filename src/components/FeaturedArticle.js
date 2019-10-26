import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class FeaturedArticle extends React.Component {
    render() {

        const { data } = this.props
        const post = data.allMarkdownRemark.edges[0].node.frontmatter

        return (
            <section className="section spotlight-article">
                <h2>Featured Article</h2>
                <div className="container">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">{post.title}</p>
                        </header>
                        <div className="card-image">
                            <figure className="image is-16x9">
                                <img src="img/spotlight.jpg" alt="Spotlight Article" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <p>By Jim Mendes | October 24, 2019</p>
                                {post.html}
                                <a href="https://www.jimmendes.com">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

FeaturedArticle.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
}

export default () => (
    <StaticQuery
      query={graphql`
        query FeaturedArticleQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" }, featuredpost: { eq: true } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <FeaturedArticle data={data} count={count} />}
    />
  )
  