import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Learn GraphQL, PostgreSQL and PostGraphile" keywords={['graphql', 'postgresql', 'postgraphile', 'graphile engine']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

<!DOCTYPE html>
<html>
  <head>
    <title>Learn GraphQL, PostgreSQL and PostGraphile</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Learn PostGraphile</h1>
          <p class="lead text-muted">
            PostGraphile helps you bring together the power of PostgreSQL with
            the flexibility and ease-of-use of GraphQL. On this site you'll find
            a number of learning resources to help you on your journey.
          </p>
          <p>
            <a href="#resources" class="btn btn-primary my-2"
              >View learning resources</a
            >
            <a
              href="https://graphile.org/postgraphile/"
              class="btn btn-secondary my-2"
              >Visit PostGraphile</a
            >
          </p>
        </div>
      </section>
      <div class="album py-5 bg-light" id="resources">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-6 box-shadow">
                <img
                  class="card-img-top"
                  src="http://placekitten.com/600/400"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h3>GraphQL Request Cheatsheet</h3>
                  <p class="card-text">
                    This cheatsheet is a quick reference to the names of the
                    different parts of a GraphQL request and how they fit
                    together. It also demonstrates how to send a request to a
                    GraphQL API over HTTP.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Download
                      </button>
                    </div>
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-6 box-shadow">
                <img
                  class="card-img-top"
                  src="http://placekitten.com/g/600/400"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h3>GraphQL Schema Definition Language Cheatsheet</h3>
                  <p class="card-text">
                    GraphQL Schema Definition Language (SDL) enables teams to
                    discuss the design of a GraphQL API using shared terminology
                    accessible to non-programmers. This cheatsheet is a
                    reference for the terminology and how it is used.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Download
                      </button>
                    </div>
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-6 box-shadow">
                <img
                  class="card-img-top"
                  src="http://placekitten.com/600/402"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h3>PostgreSQL Row-Level Security Infosheet</h3>
                  <p class="card-text">
                    In 2015, PostgreSQL introduced a granular security
                    technology, Row Level Security, in which policies containing
                    SQL expression dictate which rows the current user may
                    operate on. Learn about how you can increase your
                    application security with RLS in this infosheet.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Download
                      </button>
                    </div>
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="text-muted">
      <div class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>
          These learning resources are copyright &copy; 2019 Graphile Ltd.
          Graphile Ltd is a limited company registered in England and Wales,
          company number: 11171700, registered address: Tremain House, 8 Maple
          Drive, Kings Worthy, Winchester, Hampshire, SO23 7NG, United Kingdom.
        </p>
      </div>
    </footer>
  </body>
</html>
