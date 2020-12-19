import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
        maxWidth: `1440px`,
        padding: `.75rem 24px`,
        textAlign: `-webkit-center`,
      }}
    >
      <div
        style={{        
          maxWidth: `1440px`,
          textAlign: `-webkit-center`,
          display: `flex`,
          alignItems: `center`,
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
          <div style={{display:'flex', alignItems: 'center'}}>
          <Link
              to="/about"
              style={{
                color: `var(--font-high-contrast)`,
                textDecoration: `none`, 
                marginLeft: 0,
              }}
            >
              about
            </Link>
            {/* <Link
              to="/about"
              style={{
                color: `var(--font-high-contrast)`,
                textDecoration: `none`, 
                marginLeft: 24,
              }}
            >
              about
            </Link> */}
            <a href="https://twitter.com/himynameislt" target="_blank" rel="noopener norefferer" class="circle" style={{marginLeft:24}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 33 27" >
                <path class="twitter" fill-rule="evenodd" clip-rule="evenodd" d="M32.4301 3.13626C31.2386 3.67033 29.9539 4.02922 28.6071 4.1921C29.9821 3.36542 31.0372 2.05202 31.5351 0.489567C30.2504 1.25753 28.8254 1.81528 27.3092 2.11357C26.0941 0.811526 24.3661 0 22.4527 0C18.7765 0 15.7967 2.99801 15.7967 6.69486C15.7967 7.21662 15.8569 7.73081 15.9718 8.21848C10.4405 7.93724 5.536 5.27445 2.25506 1.22344C1.68376 2.21489 1.35624 3.36542 1.35624 4.58792C1.35624 6.91265 2.52706 8.96183 4.31624 10.1607C3.22635 10.1275 2.19859 9.82544 1.29976 9.32451V9.40973C1.29976 12.6539 3.59435 15.3575 6.63812 15.9739C6.07906 16.1235 5.49082 16.205 4.88847 16.205C4.45835 16.205 4.04141 16.1661 3.63482 16.0885C4.48188 18.7484 6.94024 20.6811 9.85035 20.7342C7.57271 22.5286 4.70494 23.6006 1.58776 23.6006C1.04941 23.6006 0.517647 23.5693 0 23.5059C2.94306 25.4035 6.44141 26.5133 10.2005 26.5133C22.4414 26.5133 29.1341 16.3148 29.1341 7.46756C29.1341 7.17874 29.1247 6.88898 29.1144 6.60395C30.4113 5.66175 31.5388 4.48281 32.4301 3.13626V3.13626Z" />
</svg>
            </a>
            {/* <ThemeToggler>
              {({ theme, toggleTheme }) => (
              <label class="theme-switcher">
                <input class="theme-switcher-input"
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                />{' '}
                <div class="switcher-ui">

                </div>
              </label>
              )}
            </ThemeToggler> */}
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
