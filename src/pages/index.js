import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureBox from "../components/feature-box"
import { StaticQuery, graphql } from "gatsby"
import "./index.css"
const keywords = [`mongodb`, `nodejs`, `expressjs`, `browser`, `open-source`, `pug`, `crud`, `mongo`]

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "vertical-med.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        createImg: file(relativePath: { eq: "screenshots/create.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        readImg: file(relativePath: { eq: "screenshots/read.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        updateImg: file(relativePath: { eq: "screenshots/update.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        deleteImg: file(relativePath: { eq: "screenshots/delete.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <Layout isHome={true}>
        <SEO title="Moncrud" keywords={keywords} />
        <main className="container-fluid main-page">
          <section className="intro-section row">
            <div className="offset-1 col-10 offset-sm-4 col-sm-4  img-col">
              <Img fadeIn={false} fluid={data.logo.childImageSharp.fluid} alt="logo"/>
            </div>
            <h1 className="col-12">
              Open source tool that allows simple CRUD operations on any mongoDB database
            </h1>
          </section>
          <section className="row features-section">
            <p className="offset-0 col-12 offset-sm-2 col-sm-8 features-explain-main">
              Moncrud provides a web browser interface in which users can perform simple operations on database collections without the need to write queries or use functions
            </p>
            <FeatureBox
              title="C"
              description="reate"
              img={data.createImg.childImageSharp.fluid}
            />
            <FeatureBox
              title="R"
              description="ead"
              img={data.readImg.childImageSharp.fluid}
            />
            <FeatureBox
              title="U"
              description="pdate"
              img={data.updateImg.childImageSharp.fluid}
            />
            <FeatureBox
              title="D"
              description="elete"
              img={data.deleteImg.childImageSharp.fluid}
            />
          </section>
          <section className="row links-section">
            <p className="offset-0 col-12 offset-sm-1 col-sm-10 links-explain-main">
              Once moncrud setup process is complete, users without a programming background are able to easily interact with data stored in a mongoDB database.
            </p>
            <p className="offset-0 col-12 offset-sm-1 col-sm-10 links-explain-main">
              Get started by viewing the project on github, reading the documentation or checking out the demo.
            </p>
            <div className="offset-2 col-8 offset-md-0 col-md-4">
              <a href="https://github.com/sbeltran10/moncrud" >
                Clone on Github
            </a>
            </div>
            <div className="offset-2 col-8 offset-md-0 col-md-4">
              <Link
                to="/docs">
                Docs
            </Link>
            </div>
            <div className="offset-2 col-8 offset-md-0 col-md-4">
              <a href="https://demo.moncrud.com" >
                Demo
            </a>
            </div>
          </section>
        </main>
      </Layout>
    }
  />
)

export default IndexPage
