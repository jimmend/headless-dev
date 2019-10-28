import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const RecentArticle = (data) => {
  return (
    <div className="horizontal-card">
        <Img
        fluid={
          data.article.frontmatter.image.childImageSharp.fluid
        }
        alt="Photo"
      ></Img>
      <div className="card-content">
          <div className="super-title">
            <span className="super-title-text">{data.article.frontmatter.maincategory}</span>
          </div>
        <div className="title">
          {data.article.frontmatter.title}
        </div>
        <div className="author">
          BY {data.article.frontmatter.author} |{" "}
          {data.article.frontmatter.date}
        </div>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{
            __html: data.article.excerpt
          }}
        ></div>
        <div className="read-more">
          <Link className="" to={data.article.fields.slug}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentArticle;