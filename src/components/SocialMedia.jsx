import React from "react"
import styled from "styled-components"

const SocialMediaContainer = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  border: 1px solid black;
  border-radius: 100px;
`

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <h1>Test</h1>
    </SocialMediaContainer>
  )
}

SocialMedia.propTypes = {}

export default SocialMedia
