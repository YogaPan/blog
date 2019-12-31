import React from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.div`
  margin: 0 auto;
  max-width: 840px;
  padding: 0px 1.0875rem 1.45rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}
