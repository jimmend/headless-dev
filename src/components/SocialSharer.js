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

const SocialSharer = () => {
  return (
    <div className="social-sharer">
    <p className="title"><span className="title-box">Share This Article</span></p>
    <LinkedinShareButton url={window.location.href} className="inline">
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <FacebookShareButton url={window.location.href} className="inline">
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <PinterestShareButton url={window.location.href} className="inline">
      <PinterestIcon size={32} round />
    </PinterestShareButton>
    <TwitterShareButton url={window.location.href} className="inline">
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <WhatsappShareButton url={window.location.href} className="inline">
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
    <RedditShareButton url={window.location.href} className="inline">
      <RedditIcon size={32} round />
    </RedditShareButton>
    <PocketShareButton url={window.location.href} className="inline">
      <PocketIcon size={32} round />
    </PocketShareButton>
    <InstapaperShareButton url={window.location.href} className="inline">
      <InstapaperIcon size={32} round />
    </InstapaperShareButton>
    <EmailShareButton url={window.location.href} className="inline">
      <EmailIcon size={32} round />
    </EmailShareButton>
  </div>
  );
};

export default SocialSharer;