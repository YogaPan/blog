import { Link as BaseLink } from 'gatsby'
import React from 'react'
import { string } from 'prop-types'
import styled, { css } from 'styled-components'
import { gapHorizontal } from '../../utils/style'
import GithubIcon from '../../assets/github.svg'
import LinkedInIcon from '../../assets/linkedin.svg'
import BrandIcon from '../../assets/brand.svg'
import ThemeSwitch from './ThemeSwitch'

const linkStyleMixin = css`
  svg {
    height: 30px;
    width: 30px;
    fill: var(--primary-icon-color);
    transition: var(--transition-duration);

    &:hover {
      fill: var(--primary-icon-hover-color);
    }
  }
`

const Link = styled(BaseLink)`
  ${linkStyleMixin}
  display: flex;
  align-items: center;
  color: var(--primary-text-color);
  font-size: 32px;

  &:hover {
    color: var(--primary-icon-hover-color);
  }

  &:hover svg {
    fill: var(--primary-icon-hover-color);
  }
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

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <BrandIcon style={{ height: 40, width: 40 }} />
        <span style={{ marginLeft: 16, width: 200 }}>Galtz's Blog</span>
      </Link>
      <SubContainer>
        <OutsideLink href="https://www.linkedin.com/in/%E6%98%B1%E5%98%89-%E6%BD%98-5a7927ab/">
          <LinkedInIcon />
        </OutsideLink>
        <OutsideLink href="https://github.com/YogaPan">
          <GithubIcon />
        </OutsideLink>
        <ThemeSwitch />
      </SubContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default React.memo(Header)
