import { Link } from "gatsby"
import { string } from "prop-types"
import React from "react"
import styled from "styled-components"

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
        <Link to="/">{siteTitle}</Link>
      </p>
    </div>
    <div>
      <Link to="/about-me">About Me</Link>
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
