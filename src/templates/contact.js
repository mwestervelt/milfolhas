import React from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div>
        <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
        <Container>
          <h1 className='display-3'>{post.frontmatter.title}</h1>
        </Container>
       
        
        <Container dangerouslySetInnerHTML={{ __html: post.html }} />
        <Container>
        <Form>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input type="text" name="email" id="exampleEmail" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Email</Label>
              <Input type="email" name="email" id="examplePassword" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Message</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </Container>
        
      </div>
    </Layout>
  )
}

export const contactPageQuery = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
