import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const thankYouPageQuery = graphql`
    query ThankYouPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`
const ThankYouPage = ({data}) => {
    const { markdownRemark: page } = data;

    return(
        <Layout isLandingPage={true} >
            <div className="thank-you">
                <HTMLContent content={page.html} />
            </div>
        </Layout>
    )
}

export default ThankYouPage

