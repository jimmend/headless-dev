import React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

const RecentArticle = (data) => {
  return (
    <div className="horizontal-card">
        <PreviewCompatibleImage
          imageInfo={data.article.frontmatter} 
        />
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
            __html: data.article.frontmatter.description
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