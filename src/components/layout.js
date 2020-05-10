/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
// import PostList from "../components/postList"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div
        style={{
          margin: `20vh auto`,
          maxWidth: 1440,
          padding: `0 1.0875rem 1.45rem`,
          textAlign: `-webkit-center`,
        }}
      >
        <main>{children}</main>
        <footer>

          <article style={{textAlign: `left`, color: `var(--font-mid-contrast)`}}>
            <hr></hr>
            <h5 style={{fontFamily: `RegolaRegular`}}>This page was written and built by Lucas Terra. You can reach me on <a href="https://twitter.com/himynameislt" target="_blank" rel="noopener norefferer">Twitter</a> and the good old <a href="mailto:hey@lucasterra.com">eletronic mail</a>.<span style={{color: `var(--font-low-contrast)`}}> © 2009-2020</span>
            </h5>
          </article>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
