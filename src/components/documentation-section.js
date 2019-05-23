import Img from "gatsby-image"
import React from "react"
import "./documentation-section.css"

const DocumentationSection = ({ id, title, children }) => (
  <section id={id} className="row documentation-section">
    <h2 className="col-12">
      {title}
    </h2>
    {children}
  </section>
)

export default DocumentationSection
