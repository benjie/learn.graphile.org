import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Learn GraphQL, PostgreSQL and PostGraphile"
      keywords={['graphql', 'postgresql', 'postgraphile', 'graphile engine']}
    />

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
            <a href="#resources" class="btn btn-primary my-2">
              View learning resources
            </a>
            <a
              href="https://graphile.org/postgraphile/"
              class="btn btn-secondary my-2"
            >
              Visit PostGraphile
            </a>
          </p>
        </div>
      </section>
      <div class="album py-5 bg-light" id="resources">
        <div class="container">
          <div class="row">
            <StaticQuery
              query={graphql`
                query {
                  docs: allFile(
                    filter: {
                      sourceInstanceName: { eq: "docs" }
                      relativePath: { glob: "*.{pdf,pdf.png}" }
                    }
                    sort: { fields: [relativePath] }
                  ) {
                    edges {
                      node {
                        name
                        relativePath
                        absolutePath
                        childImageSharp {
                          fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={data => {
                console.log(data);
                const docs = data.docs.edges
                  .filter(edge => edge.node.relativePath.endsWith('.pdf'))
                  .map(edge => {
                    const { node } = edge;
                    const imageEdge = data.docs.edges.find(
                      edge =>
                        edge.node.relativePath === node.relativePath + '.png'
                    );
                    const image = imageEdge
                      ? imageEdge.node.childImageSharp
                      : null;
                    return {
                      ...node,
                      image,
                    };
                  });
                console.log(docs);
                return docs.map(doc => {
                  return (
                    <div class="col-md-6" key={doc.relativePath}>
                      <div class="card mb-6 box-shadow">
                        {doc.image ? (
                          <Img fluid={doc.image.fluid} class="card-img-top" />
                        ) : (
                          <img
                            class="card-img-top"
                            src={'http://placekitten.com/600/400'}
                            alt="PDF preview"
                          />
                        )}
                        <div class="card-body">
                          <h3>{doc.name.replace(/_/g, ' ')}</h3>
                          <p class="card-text">TODO!</p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                              >
                                Download
                              </button>
                            </div>
                            <small class="text-muted" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                });
              }}
            />
          </div>
        </div>
      </div>
    </main>

    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          These learning resources are copyright &copy; 2019 Graphile Ltd.
          Graphile Ltd is a limited company registered in England and Wales,
          company number: 11171700, registered address: Tremain House, 8 Maple
          Drive, Kings Worthy, Winchester, Hampshire, SO23 7NG, United Kingdom.
        </p>
      </div>
    </footer>
  </Layout>
);

export default IndexPage;
