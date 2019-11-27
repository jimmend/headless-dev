import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from 'gatsby-image'
import { QueryDocumentKeys } from "graphql/language/visitor";

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
    }
`

const QuotePage = ({data}) => {
    const styles = {}
    styles.image = {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
    }
    styles.card = {
        padding: "4rem",
        margin: "3rem",
        display: "block",
        color: "#fff",
        backgroundColor: "rgba(0,18,80,0.8)",
        borderRadius: "3rem",
        maxWidth: "90%",
    }
    styles.tint = {
        position: "absolute",
        height: "100%",
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
    }
    styles.quote = {
        fontSize: "2.5rem",
        textAlign: "center",
        lineHeight: "2.75rem"
    }
    styles.author = {
        marginTop: "1.5rem",
        fontSize: "1.5rem",
        textAlign: "center",
    }
    const { markdownRemark: quote } = data
    return(
        <div>
             <Img 
                fixed={quote.frontmatter.image.childImageSharp.fixed}
                style={styles.image}
             />
             <div style={styles.tint} >
             <div style={styles.card}>
                <div style={styles.quote} dangerouslySetInnerHTML={{__html: quote.html}}></div>
                <div style={styles.author}>{quote.frontmatter.author}</div>
             </div>
             </div>
        </div>
     )
}

export default QuotePage