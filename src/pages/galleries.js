import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const Galleries = ({data}) => {

const posts = data.allContentfulGallery.edges;

  return(
    <div>

      <Helmet>
        <title>Galleries</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="intro--galleries">
        <h2 className="page-title">Galleries</h2>
      </div>
      <ul className="galleries-list">
        {posts.map(({ node: post, index }) => (
          <li key={post.id}>
            <Link to={post.slug}>
              <Img sizes={post.cover.sizes} alt={post.cover.title} title={post.cover.title} backgroundColor={"#f1f1f1"} />
              <h3>{post.date}</h3>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )

}

export const query = graphql`
  query GalleryQuery {
    allContentfulGallery(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          cover {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`

export default Galleries
