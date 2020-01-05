import { Link as BaseLink } from 'gatsby'
import React from 'react'
import { string } from 'prop-types'
import styled, { css } from 'styled-components'
import { gapHorizontal } from '@utils/style'
import GithubIcon from '@assets/github.svg'
import LinkedInIcon from '@assets/linkedin.svg'
import BrandIcon from '@assets/brand.svg'
import ThemeSwitch from './ThemeSwitch'

const linkStyleMixin = css`
  display: flex;
  align-items: center;
  font-size: 32px;
  line-height: 1;
  color: var(--primary-text-color);

  &:hover {
    color: var(--primary-icon-hover-color);
    svg {
      fill: var(--primary-icon-hover-color);
    }
  }

  svg {
    height: 30px;
    width: 30px;
    fill: var(--primary-icon-color);
    transition: var(--transition-duration);
  }
`

const brandCss = css`
  svg {
    height: 40px;
    width: 40px;
  }
  span {
    margin-left: 16px;
    width: 200px;
  }
`

const linkedInCss = css`
  &:hover svg {
    fill: var(--linkedin-color);
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

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" css={brandCss}>
        <BrandIcon />
        <span>Galtz's Blog</span>
      </Link>
      <SubContainer>
        <OutsideLink href="https://github.com/YogaPan">
          <GithubIcon />
        </OutsideLink>
        <OutsideLink
          css={linkedInCss}
          href="https://www.linkedin.com/in/%E6%98%B1%E5%98%89-%E6%BD%98-5a7927ab/"
        >
          <LinkedInIcon />
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
