import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import Sidebar from './Sidebar'
import '../styles/index.scss'
import { Row, Col} from 'reactstrap'

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <link 
        rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
        crossOrigin="anonymous">
      </link>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
        <h1>{pageTitle}</h1>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4"><Sidebar author={postAuthor} authorFluid={authorImageFluid}/></Col>
          </Row>  
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
