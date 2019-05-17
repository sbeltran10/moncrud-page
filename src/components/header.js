import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import "./header.css"

const Header = ({ isHome }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "horizontal-sm.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <header>
        <ul>
          <li className="logo-cont-li">
            {!isHome &&
              <Link to="/">
                <Img fluid={data.logo.childImageSharp.fluid} />
              </Link>
            }
          </li>
          <li className="link-li">
            <Link to="/docs">
              Docs
            </Link>
          </li>
          <li className="link-li">
            <a href="https://demo.moncrud.com">
              Demo
            </a>
          </li>
        </ul>
      </header>
    }
  />

)

export default Header
