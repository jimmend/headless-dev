import { graphql, useStaticQuery } from 'gatsby'

const { allSitePage } = useStaticQuery(graphql`
    query quoteFactoryQuery {
        allSitePage(filter: {path: {regex: "//quotes//"}}) {
            edges {
                node {
                    path
                }
            }
        }

    }
`)

const quoteFactory = {
    pages: allSitePage.edges,
    index: 0,
    test: () => { 
        console.log('test') 
    }
}

export default quoteFactory