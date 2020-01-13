import React from 'react'
import { Link } from 'gatsby'

import Layout from '@components/Layout/Layout'
import SEO from '@components/Seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Surprise Mother Fucker!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
