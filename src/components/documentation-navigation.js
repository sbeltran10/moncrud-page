import Img from "gatsby-image"
import React from "react"
import './documentation-navigation.css'

const DocumentationNavigation = ({ docSections }) => (
  <nav className="docs-nav">
    <ul>
      {docSections.map(({ id, title }, index) => (
        <li key={index}>
          <a href={`#${id}`}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default DocumentationNavigation
