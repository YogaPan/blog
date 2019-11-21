import React from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Pagination from '../components/Pagination'
import './layout.css'

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

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
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
      <Pagination />
      <Footer style={{ marginTop: 0 }}>
        <span>© {new Date().getFullYear()} Galtz, Powered by</span>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}
