import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"

import './styles.scss'

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Bul bet tabılmadı</title>
      <div className="not-found">
        <h2>Siz izlegen bet tabılmadı.</h2>
        <Link to="/">Bas betke qaytıw</Link>.
      </div>
    </Layout>
  )
}

export default NotFoundPage
