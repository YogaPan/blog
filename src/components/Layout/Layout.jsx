import React from 'react'
import styled from 'styled-components'
import { useSpring } from 'react-spring'
import { node } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import ArrowUpIcon from '@assets/arrow-up.svg'
import ShareIcon from '@assets/share.svg'
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

const ScrollTopButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  height: 56px;
  width: 56px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: black;
  background-color: var(--scroll-button-color);
  cursor: pointer;
  transition: var(--transition-duration);
  box-shadow: var(--scroll-button-shadow);

  &:hover {
    background-color: #444;
  }
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

  const [, setY] = useSpring(() => ({ y: 0 }))

  return (
    <LayoutContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <ScrollTopButton
        onClick={() => {
          setY({
            y: 0,
            reset: true,
            from: { y: window.scrollY },
            onFrame: props => window.scroll(0, props.y),
          })
        }}
      >
        <ArrowUpIcon height={32} width={32} fill={'#fff'} />
      </ScrollTopButton>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}
