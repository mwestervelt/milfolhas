import React from 'react'
import { Container } from 'reactstrap'
import logo from "./logo.png" // Tell Webpack this JS file uses this image
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// code syntax-highlighting theme
import 'prismjs/themes/prism-twilight.css'

// main site style
import './juxtapose.css'
import './index.scss'

const TemplateWrapper = ({ children, data }) => {
 
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />

       {/* NAV */}
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
          <Container>
            <ul className='nav navbar-nav mx-auto'>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>The Project</Link>
              </li>
              <li className='nav-item'>
                <Link to='/reforestation' className='nav-link'>Reforestation</Link>
              </li>
              <li className='nav-item'>
                <Link to='/zecar' className='nav-link'>Zécar</Link>
              </li>
              <li className='nav-item'>
                <Link to='/atlantic-forest' className='nav-link'>Atlantic Forest</Link>
              </li> 
              <li className='nav-item'>
                <Link to='/contact' className='nav-link'>Contact</Link>
              </li>
            </ul>
          </Container>
         
        </div>
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand mx-auto'><img className="logo" src={logo} alt="logo"></img></Link>

          </div>


        <div className='pageContent'>{children}</div>
      </div>
    )} />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
