import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

import './styles.scss'

// const images = [
//   { name: 'open-source', link: 'https://opensource.org' },
//   { name: 'github', link: 'https://github.com/qaraqalpaq' },
// ]

const IndexPage = ({ data }) => {
  const { frontmatter: meta, html } = data.file.childMarkdownRemark

  return (
    <Layout asHtml={html}>
      <title>{meta.title}</title>
      <div className="images">
        <a
          href="https://opensource.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            className="open-source"
            src="../../static/open-source.png"
            alt="open-source"
          />
        </a>
        <a
          href="https://github.com/qaraqalpaq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            className="github"
            src="../../static/github.png"
            alt="github"
          />
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    file(name: { eq: "index" }, extension: { eq: "md" }) {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
  }
`
