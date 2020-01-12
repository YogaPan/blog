import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { node } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import FloatingButton from './FloatingButton'
import { Flex } from 'rebass'
import theme from '@config/theme'

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
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column" alignItems="center" minHeight="100vh">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Flex flexDirection="column" flex="1" maxWidth={840}>
          {children}
        </Flex>
        <Footer />
        <FloatingButton />
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}
