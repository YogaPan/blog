import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 200px;
  margin-top: 50px;
  background-color: var(--primary-black-bg-color);
  color: var(--primary-white-text-color);
`

export default function Footer() {
  return (
    <FooterContainer>
      <span>© {new Date().getFullYear()} Galtz, Powered by Gatsby.js</span>
    </FooterContainer>
  )
}
