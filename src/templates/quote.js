import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import left from "../../static/img/angle-double-left.svg";
import right from "../../static/img/angle-double-right.svg";
import home from "../../static/img/home.svg";

export const quoteQuery = graphql`
  query QuoteQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        author
        title
        image {
          childImageSharp {
            fixed(width: 1920, height: 1200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    allSitePage(filter: { path: { regex: "//quotes//" } }) {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const QuotePage = ({ data, location }) => {

  const { markdownRemark: quote } = data;
  const { edges: pages } = data.allSitePage;

  let previous, next;

  for (const [i, item] of pages.entries()) {
    if (item.node.path === location.pathname) {
      previous = i === 0 ? pages.length - 1 : i - 1;
      next = i === pages.length - 1 ? 0 : i + 1;
      break;
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        flexFlow: "wrap"
      }}
    >
      <Img
        fixed={quote.frontmatter.image.childImageSharp.fixed}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          zIndex: "-1"
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <Link to={pages[previous].node.path}>
          <img style={{
              height: "4rem",
              width: "4rem"
          }} src={left} alt="Left arrow" />
        </Link>
        <div
          style={{
            padding: "4rem",
            width: "80%",
            margin: "15px",
            color: "#fff",
            backgroundColor: "rgba(0,18,80,0.8)",
            borderRadius: "3rem"
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              lineHeight: "2.75rem"
            }}
            dangerouslySetInnerHTML={{ __html: quote.html }}
          ></div>
          <div
            style={{
              marginTop: "1.5rem",
              fontSize: "1.5rem",
              textAlign: "center"
            }}
          >
            {quote.frontmatter.author}
          </div>
        </div>
        <Link to={pages[next].node.path}>
          <img style={{
              height: "4rem",
              width: "4rem"
          }} src={right} alt="Left arrow" />
        </Link>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center"
        }}
      >
        <Link to="/">
          <img style={{
              height: "2rem",
              width: "2rem"
          }} src={home} alt="Home" />
        </Link>
      </div>
    </div>
  );
};

export default QuotePage;