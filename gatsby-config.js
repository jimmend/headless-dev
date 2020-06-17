module.exports = {
  siteMetadata: {
    title: 'jimmendes.com | Personal Productivity and...Stuff',
    description:
      "A site dedicated to providing you with useful tips and tricks that make your life maybe a little bit better and a little easier.",
    author: "Jim Mendes",
    siteUrl: "https://www.jimmendes.com"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.jimmendes.com',
        policy: [{
          userAgent: '*',
          disallow: ['/']
        }]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        publicPath: 'coachcolin'
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
/*           {
            output: '/newsletter/rss.xml',
            title: 'jimmendes.com Daily Newsletter RSS feed',
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { 
                    frontmatter: {
                      maincategory: { eq: "Daily Newsletter" }
                    } 
                  }
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        quotee
                        quote
                      }
                    }
                  }
                }
              }
            `,
            serialize: ( { query: { site, allMarkdownRemark } } ) => {
              return allMarkdownRemark.edges.map(edge => {
                const quote = '<div style="margin: 2rem 0.5rem; padding: 2rem 4rem; background-color: #273A73; text-align: center; color: #ffffff;"><p style="font-weight: 600; font-size: 1.25rem;">' + edge.node.frontmatter.quote + '</p><p style="text-align: right;">' + edge.node.frontmatter.quotee + '</p></div>'
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [ { "content:encoded": quote + edge.node.html } ]
                })
              })
            }
          },
 */          {
            output: '/blog/rss.xml',
            title: 'jimmendes.com Blog RSS feed',
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { 
                    frontmatter: { 
                      templateKey: { eq: "blog-post" },
                      maincategory: { ne: "Daily Newsletter" }
                    } 
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            serialize: ({query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                })
              })
            },
          }
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ], 
}
