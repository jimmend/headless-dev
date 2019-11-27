import React from "react";
import PropTypes from "prop-types";
//import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
// eslint-disable-next-line
import { graphql, Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import BlogSidebar from "../components/BlogSidebar";
import SocialSharer from '../components/SocialSharer'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  author,
  date,
  tags,
  title,
  helmet,
  imageInfo,
  slug,
  id,
  quote
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column is-8-desktop is-7-tablet blog-post">
                <PreviewCompatibleImage imageInfo={imageInfo} />
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <SocialSharer slug={slug} />
                <p className="byline">
                  By {author} | {date}
                </p>
                <PostContent content={content} />
                {/* {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <h4>Tags</h4>
                    <ul className="taglist">
                      {tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                      ) : null} */}
              </div>
              <div className="column">
                <BlogSidebar postId={slug} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.object,
  author: PropTypes.string,
  date: PropTypes.string,
  slug: PropTypes.string,
  id: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        imageInfo={post.frontmatter}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        slug={post.fields.slug}
        id={post.id}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        author
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
