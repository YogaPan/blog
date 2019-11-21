import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
`

export default () => {
  return (
    <PaginationContainer>
      <Link to="/page-2/">Go to page 2</Link>
    </PaginationContainer>
  )
}
