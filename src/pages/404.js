import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <article>
      <h1>Can't find this page</h1>
      <h4>You just hit a route that doesn&#39;t exist... the sadness.</h4>
      <h5><a href="/">← Back home</a></h5>
    </article>
  </Layout>
)

export default NotFoundPage
