import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import GithubIconLink from '@components/Link/GithubIconLink'
import LinkedInIconLink from '@components/Link/LinkedInIconLink'
import RssLinkIcon from '@components/Link/RssIconLink'

const FooterContainer = styled(Flex)`
  background-color: var(--primary-black-bg-color);
  span {
    color: var(--primary-white-text-color);
  }
  svg {
    fill: var(--primary-white-text-color);
  }
`

export default function Footer() {
  return (
    <FooterContainer
      alignSelf="stretch"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={5}
      py={5}
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        sx={{ '> * + *': { marginLeft: 3 } }}
      >
        <GithubIconLink />
        <LinkedInIconLink />
        <RssLinkIcon />
      </Flex>
      <Box mt={4}>
        <span>© {new Date().getFullYear()} Galtz, Powered by Gatsby.js</span>
      </Box>
    </FooterContainer>
  )
}
