import React from 'react'
import { Flex } from 'rebass'
import { string } from 'prop-types'
import BrandIconLink from '@components/Link/BrandIconLink'
import GithubIconLink from '@components/Link/GithubIconLink'
import LinkedInIconLink from '@components/Link/LinkedInIconLink'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      height={100}
      width="100%"
    >
      <BrandIconLink />
      <Flex alignItems="center" sx={{ '> * + *': { marginLeft: 16 } }}>
        <GithubIconLink />
        <LinkedInIconLink />
        <ThemeSwitch />
      </Flex>
    </Flex>
  )
}

Header.propTypes = {
  siteTitle: string
}

Header.defaultProps = {
  siteTitle: ''
}

export default React.memo(Header)
