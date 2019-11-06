import React from 'react'
import { Jumbotron } from 'reactstrap'
// import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import vista1 from '../components/layout/vista1.jpg'
import vista2 from '../components/layout/vistaold.jpg'
import { Helmet } from "react-helmet"

import styles from '../components/layout/juxtapose.css'




const IndexPage = ({ data }) => {
  // const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')

  return (

    <Layout>
      <Jumbotron fluid>
        {/* <iframe title="comparison" id="myiframe" frameborder="0" className="juxtapose" width="100%" height="1711" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=4fe828f0-00db-11ea-b9b8-0edaf8f81e27"></iframe> */}
        <React.Fragment>
          <Helmet>
            <script src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"></script>
          </Helmet>
          <div className="juxtapose">
          <img alt="1996 vista" src={vista2} />
            <img alt="2019 vista" src={vista1} />
            
          </div>
          <link rel="stylesheet" href={styles} />
        </React.Fragment>

      </Jumbotron>

    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`
