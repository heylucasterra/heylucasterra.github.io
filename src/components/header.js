import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./layout.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // position: `-webkit-sticky`,
      // position: `sticky`,
      top: `0`,
      zIndex: `9999999`,
      // for some reasons the position sticky won't work... need to explore why
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `960px`,
        padding: `1.45rem 1rem`,
        textAlign: `-webkit-center`,
      }}
    >
      <div
        style={{        
          maxWidth: `1440px`,
          textAlign: `-webkit-center`,
          display: `flex`,
          alignItems: `flex-end`,
        }}
        >
          <h4 style={{ margin: 0, padding: `0 6px` }}>
            <Link
              to="/"
              style={{
                color: `var(--font-high-contrast)`,
                textDecoration: `none`, 
                marginLeft: 0,
              }}
            >
              lucasterra
            </Link>
          </h4>
          <div style={{flexGrow:1,}}>

          </div>
          <div>
            <a style={{
                color: `var(--font-high-contrast)`,
                textDecoration: `none`,
                marginRight: `1rem`,
              }} href="https://twitter.com/himynameislt" target="_blank" rel="noopener norefferer">
              <h5 style={{margin:`0 .5rem 0 0`, display:`inline-block`}}>Twitter</h5>
            </a>
            <a style={{
                color: `var(--font-high-contrast)`,
                textDecoration: `none`,
                marginRight: `1rem`,
              }} href="https://linkedin.com/in/lucast" target="_blank" rel="noopener norefferer">
              <h5 style={{marginBottom:0, display:`inline-block`}}>Linkedin</h5>
            </a>

          </div>
        </div>

    </div>
 
 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
