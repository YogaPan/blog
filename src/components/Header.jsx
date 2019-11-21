import { Link } from 'gatsby'
import { string } from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import homeIcon from '../images/home.svg'
import mediumIcon from '../images/medium.svg'
import githubIcon from '../images/github.svg'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  height: 100px;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div>
      <p style={{ margin: 0 }}>
        {/* <Link to="/">{siteTitle}</Link> */}
        <Link to="/">
          <img src={homeIcon} style={{ height: 40 }} />
          {/* <span style={{ paddingLeft: 24 }}>{siteTitle}</span> */}
        </Link>
      </p>
    </div>
    <div>
      <Link to="/about-me">About Me</Link>
      <a href="https://github.com/YogaPan">
        <img src={githubIcon} style={{ height: 32, padding: '0 8px' }} />
      </a>
      <a href="https://medium.com/@galtz0321">
        <img src={mediumIcon} style={{ height: 32, padding: '0 8px' }} />
      </a>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
