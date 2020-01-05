import { css } from 'styled-components'

export const gapHorizontal = value =>
  css`
    > * + * {
      margin-left: ${value};
    }
  `

export const gapVertical = value =>
  css`
    > * + * {
      margin-top: ${value};
    }
  `
