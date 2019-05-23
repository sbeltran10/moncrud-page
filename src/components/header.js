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
        <a href="https://github.com/sbeltran10/moncrud">
          <img class="fork-me" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_gray_6d6d6d.png?resize=149%2C149" alt="Fork me on GitHub" data-recalc-dims="1" />
        </a>
        <ul>
          <li className="logo-cont-li">
            {!isHome &&
              <Link to="/">
                <Img fluid={data.logo.childImageSharp.fluid} alt="logo" />
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
