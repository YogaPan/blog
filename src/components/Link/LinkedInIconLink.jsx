import React from 'react'
import { css } from 'styled-components'
import Link from '@components/Link/Link'
import LinkedInIcon from '@assets/linkedIn.svg'

const linkedInCss = css`
  &:hover svg {
    fill: var(--linked-in-color);
  }
`

export default function LinkedInIconLink() {
  return (
    <Link.Outside
      css={linkedInCss}
      href="https://www.linkedin.com/in/raven-pan-5a7927ab/"
    >
      <LinkedInIcon />
    </Link.Outside>
  )
}
