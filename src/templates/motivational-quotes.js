import React from "react";
import { graphql } from "gatsby";

export const motivationalQuotesQuery = graphql`
    query MotivationalQuotesQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "quote"}}}){
            edges {
                node {
                    frontmatter {
                        title
                        author
                    }
                }
            }
        }
    }
`

const MotivationalQuotesPage = ({data}) => {
    const { edges: quotes } = data.allMarkdownRemark
    return(
        <div>
            {quotes.map(({node: quote}) => (
                <div>
                    <div>{quote.frontmatter.title}</div>
                    <div>{quote.frontmatter.author}</div>
                </div>
            ))}
        </div>
    )
}

export default MotivationalQuotesPage