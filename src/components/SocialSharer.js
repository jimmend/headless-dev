import React from "react";
import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  PocketShareButton,
  PocketIcon,
  InstapaperShareButton,
  InstapaperIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

const SocialSharer = (data) => {
  const url = `http://www.jimmendes.com${data.slug}`
  return (
    <div className="social-sharer">
    <p className="title"><span className="title-box">Share This Article</span></p>
    <LinkedinShareButton url={url} className="inline">
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <FacebookShareButton url={url} className="inline">
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <PinterestShareButton url={url} className="inline">
      <PinterestIcon size={32} round />
    </PinterestShareButton>
    <TwitterShareButton url={url} className="inline">
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <WhatsappShareButton url={url} className="inline">
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
    <RedditShareButton url={url} className="inline">
      <RedditIcon size={32} round />
    </RedditShareButton>
    <PocketShareButton url={url} className="inline">
      <PocketIcon size={32} round />
    </PocketShareButton>
    <InstapaperShareButton url={url} className="inline">
      <InstapaperIcon size={32} round />
    </InstapaperShareButton>
    <EmailShareButton url={url} className="inline">
      <EmailIcon size={32} round />
    </EmailShareButton>
  </div>
  );
};

export default SocialSharer;