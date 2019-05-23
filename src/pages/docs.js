import React from "react"
import Img from "gatsby-image"
import Highlight from 'react-highlight'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"

import DocumentationNavigation from '../components/documentation-navigation'
import DocumentationSection from '../components/documentation-section'
import DocumentationEnvironment from '../components/documentation-environment'
import DocumentationSupport from '../components/documentation-support'

import './docs.css'
import '../../node_modules/highlight.js/styles/a11y-dark.css'

const keywords = [`mongodb`, `nodejs`, `expressjs`, `browser`, `open-source`, `pug`, `crud`, `mongo`, `docs`]

const docSections = [
  {
    id: "overview",
    title: "Overview"
  },
  {
    id: "demo",
    title: "Demo"
  },
  {
    id: "download-installation",
    title: "Download and Installation"
  },
  {
    id: "setup",
    title: "First Time Setup"
  },
  {
    id: "environment",
    title: "Environment Variables"
  },
  {
    id: "support",
    title: "Type Support"
  },
  {
    id: "customization",
    title: "Customization"
  },
]

const Docs = () => (
  <StaticQuery
    query={graphql`
    query {
      demoImg: file(relativePath: { eq: "screenshots/demo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      setup: file(relativePath: { eq: "screenshots/setup.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      connection: file(relativePath: { eq: "screenshots/connection.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data =>
      <Layout>
        <SEO title="Moncrud" keywords={keywords} />
        <main className="container-fluid docs-main">
          <div className="row">
            <div className="col-12 col-lg-3">
              <DocumentationNavigation docSections={docSections} />
            </div>
            <div className="col-12 col-lg-9">
              <div className="row">
                <h1 className="col-auto">
                  Documentation
            </h1>
              </div>
              <DocumentationSection {...docSections[0]}>
                <p className="col-12">
                  Open source tool that allows simple CRUD operations on any mongoDB database. Moncrud is a dynamic web application built with <a href="https://expressjs.com/">Express.js</a> and was designed to be easily used by anyone regardless of their technical background.
            </p>
                <p className="col-12">
                  Moncrud reads all of the collections on a specific mongo database and allows CRUD operations on the collections documents. Moncruds does not alter any of the data in a collection unless an edit/delete operation is explicitely performed in the application. Currently not all types of properties are supported but there are plans to add them in the future. This information is detailed in the <a href="#support">type support table</a>.
            </p>
                <p className="col-12">
                  By design, database's names, collection's names, and document keys names are title cased to allow for a better user experience. The actual names in the database are not modified.
            </p>
              </DocumentationSection>

              <DocumentationSection {...docSections[1]}>
                <p className="col-12">
                  You can try out the <a href="https://demo.moncrud.com">demo</a> to see how data is managed with Moncrud. The demo only showcases how to perform CRUD operations. To view how to set-up the admin user and add new connections, you can view the <a href="#setup">First Time Setup</a> section.
                </p>
                <p className="col-12">
                  The example data in the demo resets periodically to ensure everyone has a change to interact with clean data in case it is deleted or modified extensively.
                </p>
                <div className="col-12 img-cont">
                  <Img fluid={data.demoImg.childImageSharp.fluid} alt="demo image" />
                </div>
              </DocumentationSection>

              <DocumentationSection {...docSections[2]}>
                <p className="col-12">
                  Moncrud makes uses of the bcrypt npm package to enable user authentication. Make sure you have
                  installed  <a href="https://www.npmjs.com/package/bcrypt#dependencies">bcrypt's dependencies</a> before installing the dependencies for moncrud.
                </p>
                <p className="col-12">
                  Start by cloning this repository into your local folder.
                </p>
                <div className="col-12">
                  <Highlight className="bash">
                    {`git clone https://github.com/sbeltran10/moncrud`}
                  </Highlight>
                </div>

                <p className="col-12">
                  After cloning the repository, intall moncrud's dependencies.
                </p>
                <div className="col-12">
                  <Highlight className="bash">
                    {`npm install`}
                  </Highlight>
                </div>

                <p className="col-12">
                  If you don't have <a href="http://browserify.org/">Browserify</a>, install it globally and then run the broswerify build command.
                </p>

                <div className="col-12 bash">
                  <Highlight className="bash">
                    {`npm install -g browserify \nnpm run browserify-build`}
                  </Highlight>
                </div>

                <p className="col-12">
                  Start the server and open the app at http://localhost:3003.
                </p>

                <div className="col-12">
                  <Highlight className="bash">
                    {`npm start`}
                  </Highlight>
                </div>

              </DocumentationSection>

              <DocumentationSection {...docSections[3]}>
                <p className="col-12">
                  When you open the app in your browser for the first time, you will be prompted to create a user and password. You need to be logged in into Moncrud to perform any operation.
                </p>
                <p className="col-12">
                  The user's credentials are stored inside the data folder in the project root. If for any reason you need to reset the user and password, you must stop the application, delete the <span className="code-snip">config.json</span> and <span className="code-snip">users.json</span> files and then start the server again.
                </p>
                <div className="col-12 img-cont">
                  <Img fluid={data.setup.childImageSharp.fluid} alt="demo image" />
                </div>

                <p className="col-12">
                  To add a new database connection, you can select the "+ Add new" option on the left side navigation menu. You will be prompted to enter a connection URI and the name of the database whose collections you wish to manage. You can refer to <a href="https://docs.mongodb.com/manual/reference/connection-string/">mongodb's documentation</a> to learn what the connection URI should look like.
                  The database name should be exactly as it is in the mongo database.
                </p>

                <p className="col-12">
                  After you sucessfully add a database connection, you can start managin its data by selecting the database name on the left side navigation menu.
                </p>

                <p className="col-12">
                  Moncrud will inform you if it isn't able to establish a connection to the database. If you see an empty database connection which should have collections, it may be because you entered an incorrect database name.
                </p>
                <div className="col-12 img-cont">
                  <Img fluid={data.connection.childImageSharp.fluid} alt="demo image" />
                </div>
              </DocumentationSection>

              <DocumentationSection {...docSections[4]}>
                <p className="col-12">
                  You can change some aspects of the behaivour of the app my using the following environment variables.
                </p>
                <div className="col-12">
                  <DocumentationEnvironment />
                </div>

              </DocumentationSection>

              <DocumentationSection {...docSections[5]}>
                <p className="col-12">
                  The following table shows current CRU oprations support for different mongo types. If a type does not appear on the table, this means there is no plan to add support for it yet.
                </p>
                
                <div className="col-12">
                  <DocumentationSupport />
                </div>


              </DocumentationSection>

              <DocumentationSection {...docSections[6]}>
                <p className="col-12">
                  You can find the scss files inside the <span className="code-snip">routes/views</span> folder. In the <span className="code-snip">styling/_variables.scss</span> file you can find the colors being used in case you want to change them to fit your own color scheme.
                </p>

              </DocumentationSection>
            </div>
          </div>
        </main>
      </Layout >
    }
  />
)

export default Docs
