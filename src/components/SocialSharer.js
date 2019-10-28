import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share'

const SocialSharer = () => {
    const { sitePage: { path } } = useStaticQuery(
        graphql`
            query SocialSharerQuery {
                sitePage {
                    path
                }
            }
        `
    )

    return (
        <div style={{margin: "20px 0"}}>
            <FacebookShareButton 
                url={path}
                className="inline"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <PinterestShareButton 
                url={path}
                className="inline"
            >
                <PinterestIcon size={32} round />
            </PinterestShareButton>
            <TwitterShareButton 
                url={path}
                className="inline"
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
    )
}

export default SocialSharer