import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const Wedding = ({data}) => {
const posts = data.allContentfulGallery.edges;
const count = data.allContentfulGallery.totalCount;

  return(
    <div>

      <Helmet>
        <title>Wedding Galleries</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="category-navigation">
        <h2>Galleries</h2>
        <ul className="category-navigation__links">
          <li><Link to="/galleries/">All</Link></li>
          <li><Link to="/lifestyle/">Lifestyle</Link></li>
          <li><Link to="/wedding/" className="active">Wedding</Link></li>
        </ul>
      </div>

      <ul className="galleries-list">
        {posts.map(({ node: post, index }) => (
          <li key={post.id}>
            <Link to={post.slug}>
              <Img sizes={post.cover.sizes} alt={post.cover.title} title={post.cover.title} backgroundColor={"#f1f1f1"} />
              <h3>view gallery</h3>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )

}

export const query = graphql`
query WeddingQuery {
  allContentfulGallery(limit: 1000, filter:{category:{eq:"wedding"}}, sort: { fields: [date], order: DESC }) {
    totalCount
    edges {
      node {
        title
        id
        slug
        date
        category
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

export default Wedding