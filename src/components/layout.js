/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ isHome, children }) => (
  <>
    <Header isHome={isHome} />
    {children}
    <footer className="footer-text">
      <div>
        Copyright © Santiago Beltran, 2019. MIT Licensed.
          </div>
      <div>
        moncrud logo created by <a href="https://github.com/reallinfo" target="_blank" rel="noopener noreferrer">reallinfo</a>
      </div>
    </footer>
  </>
)

export default Layout
