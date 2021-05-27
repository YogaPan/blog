import Typography from 'typography'
import FunstonTheme from 'typography-theme-funston'
import { isNumber, isString } from 'lodash'

const getBlockMarginBottom = (rhythm, options) => {
  if (isNumber(options.blockMarginBottom))
    return rhythm(options.blockMarginBottom)
  if (isString(options.blockMarginBottom)) return options.blockMarginBottom
  return rhythm(1)
}

const CodePlugin =
  () =>
  ({ rhythm }, options) => ({
    'tt,code': {
      borderRadius: '3px',
      fontFamily:
        '"JetBrains Mono", "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace',
      padding: 0,
      paddingTop: '0.2em',
      paddingBottom: '0.2em'
    },
    pre: {
      borderRadius: '3px',
      lineHeight: 1.42,
      overflow: 'auto',
      wordWrap: 'normal', // So code will scroll on Safari.
      padding: getBlockMarginBottom(rhythm, options)
    },
    'pre code': {
      background: 'none',
      lineHeight: 1.42
    },
    // Add space before and after code/tt elements.
    'code:before,code:after,tt:before,tt:after': {
      letterSpacing: '-0.2em',
      content: '"\u00A0"'
    },
    // But don't add spaces if the code is inside a pre.
    'pre code:before,pre code:after,pre tt:before,pre tt:after': {
      content: 'none'
    },
    /* Inline code */
    ':not(pre) > code': {
      padding: '0.1em',
      borderRadius: '0.3em',
      whiteSpace: 'normal'
    }
  })

const customizedTheme = {
  ...FunstonTheme,
  baseFontSize: '18px',
  headerWeight: '700',
  googleFonts: [
    { name: 'JetBrains Mono', styles: ['400', '700'] },
    { name: 'Titillium Web', styles: ['400', '700'] },
    { name: 'Cabin Condensed', styles: ['400', '700'] },
    { name: 'Noto Sans TC', styles: ['400', '700'] }
  ],
  headerFontFamily: ['Titillium Web', 'Noto Sans TC', 'sans-serif'],
  bodyFontFamily: ['Cabin Condensed', 'Noto Sans TC', 'georgia', 'sans-serif'],
  plugins: [CodePlugin()]
}

const typography = new Typography(customizedTheme)

export const { scale, rhythm, options } = typography
export default typography
