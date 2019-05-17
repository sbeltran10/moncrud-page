import Img from "gatsby-image"
import React from "react"
import "./feature-box.css"

const FeatureBox = ({ title, description, img }) => (
  <article className="col-6 feature-col">
    <div className="row feature-content">
      <p className="col-12">
        <span>{title}</span> <span>{description}</span>
      </p>
      <div className="col-12 feature-img-col">
        <Img fluid={img} />
      </div>
    </div>
  </article>
)

export default FeatureBox
