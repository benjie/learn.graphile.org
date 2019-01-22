import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-mdx';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Learn GraphQL, PostgreSQL and PostGraphile"
      keywords={['graphql', 'postgresql', 'postgraphile', 'graphile engine']}
    />

    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Learn with PostGraphile</h1>
          <p class="lead">
            PostGraphile helps you bring together the power of PostgreSQL with
            the flexibility and ease-of-use of GraphQL.
            <br />
            On this site you'll find a number of learning resources to help you
            on your journey.
          </p>
          <div class="container">
            <div class="row">
              <div class="col-md-4 offset-md-2">
                <a href="#resources" class="btn btn-primary m-3 w-100">
                  View learning resources
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="https://graphile.org/postgraphile/"
                  class="btn btn-outline-primary m-3 w-100"
                >
                  Visit PostGraphile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="album py-5" id="resources">
        <div class="container">
          <div class="row">
            <StaticQuery
              query={graphql`
                query {
                  docs: allFile(
                    filter: {
                      sourceInstanceName: { eq: "docs" }
                      relativePath: { glob: "*.{pdf,png,mdx}" }
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
                        childMdx {
                          code {
                            body
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
                    const basename = node.relativePath.substr(
                      0,
                      node.relativePath.length - 4
                    );

                    const imageEdge = data.docs.edges.find(
                      ({ node }) => node.relativePath === basename + '.png'
                    );
                    const image = imageEdge
                      ? imageEdge.node.childImageSharp
                      : null;

                    const mdxEdge = data.docs.edges.find(
                      ({ node }) => node.relativePath === basename + '.mdx'
                    );
                    const mdx = mdxEdge ? mdxEdge.node.childMdx : null;

                    return {
                      ...node,
                      image,
                      mdx,
                    };
                  });
                console.log(docs);
                return docs.map(doc => {
                  const href = `/docs/${encodeURIComponent(doc.relativePath)}`;
                  return (
                    <div class="col-md-6" key={doc.relativePath}>
                      <div class="card mb-6 box-shadow">
                        <div class="card-image">
                          <a href={href}>
                            {doc.image ? (
                              <Img
                                fluid={doc.image.fluid}
                                class="card-img-top"
                              />
                            ) : (
                              <img
                                class="card-img-top"
                                src={'http://placekitten.com/600/400'}
                                alt="PDF preview"
                              />
                            )}
                          </a>
                        </div>
                        <div class="card-body">
                          <h3>
                            <a href={href}>{doc.name.replace(/_/g, ' ')}</a>
                          </h3>
                          <p class="card-text">
                            {doc.mdx ? (
                              <MDXRenderer>{doc.mdx.code.body}</MDXRenderer>
                            ) : (
                              ''
                            )}
                          </p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                              <a
                                class="btn btn-sm btn-outline-secondary"
                                href={href}
                              >
                                Download
                              </a>
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

    <footer class="footer">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>These learning resources are copyright &copy; 2019 Graphile Ltd.</p>
        <p>
          <small>
            Graphile Ltd is a limited company registered in England and Wales,
            company number: 11171700, registered address: Tremain House, 8 Maple
            Drive, Kings Worthy, Winchester, Hampshire, SO23 7NG, United
            Kingdom.
          </small>
        </p>
      </div>
    </footer>
  </Layout>
);

export default IndexPage;
