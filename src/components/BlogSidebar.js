/*eslint-disable */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import NewsletterSignup from "../components/NewsletterSignup"
import RecentArticlesSidebar from "../components/RecentArticlesSidebar"

const BlogSidebar = ({postId}) => {
  return (
    <div className="section blog-sidebar">
      <NewsletterSignup postId={postId}/>
      <RecentArticlesSidebar />
    </div>
  );
};

export default BlogSidebar;
