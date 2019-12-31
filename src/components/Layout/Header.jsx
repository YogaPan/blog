import { Link as BaseLink } from 'gatsby'
import React from 'react'
import { string } from 'prop-types'
import styled, { css } from 'styled-components'
import { gapHorizontal } from '../../utils/style'
import HomeIcon from '../../assets/home.svg'
import GithubIcon from '../../assets/github.svg'
import ThemeSwitch from './ThemeSwitch'

const linkStyleMixin = css`
  line-height: 0;

  svg {
    height: 40px;
    width: 40px;
    fill: var(--primary-icon-color);
    transition: var(--transition-duration);

    &:hover {
      fill: var(--primary-icon-hover-color);
    }
  }
`

const Link = styled(BaseLink)`
  ${linkStyleMixin}
`

const OutsideLink = styled.a.attrs({
  target: '_blank',
})`
  ${linkStyleMixin}
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.45rem 1.0875rem;
  height: 100px;
  width: 100%;
  max-width: 840px;
`

const SubContainer = styled.div`
  ${gapHorizontal('16px')}
  display: flex;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <SubContainer>
      <Link to="/">
        <HomeIcon />
      </Link>
      <OutsideLink href="https://github.com/YogaPan">
        <GithubIcon />
      </OutsideLink>
    </SubContainer>
    <SubContainer>
      {/* <Link to="/about-me">About Me</Link> */}
      <ThemeSwitch />
      {/* <OutsideLink href="https://github.com/YogaPan">
        <GithubIcon />
      </OutsideLink> */}
    </SubContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
