import React from 'react'
import Link from '@components/Link/Link'
import { css } from 'styled-components'
import { widthEqualOrSmallerThan } from '@app/config/theme'
import BrandIcon from '@assets/brand.svg'

const brandCss = css`
  text-decoration: none;

  svg {
    height: 40px;
    width: 40px;
    ${widthEqualOrSmallerThan('sm')} {
      height: 30px;
      width: 30px;
    }
  }

  span {
    font-size: 32px;
    margin-left: 16px;
    ${widthEqualOrSmallerThan('sm')} {
      font-size: 24px;
      margin-left: 8px;
    }
  }
`

export default function BrandIconLink() {
  return (
    <Link to="/" css={brandCss}>
      <BrandIcon />
      <span>Galtz&apos;s Blog</span>
    </Link>
  )
}
