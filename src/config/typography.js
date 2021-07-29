import Typography from 'typography'
import { widthEqualOrSmallerThan } from './theme'

const customizedTheme = {
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  googleFonts: [
    { name: 'Titillium Web', styles: ['700'] },
    { name: 'Cabin Condensed', styles: ['400', '700'] },
    { name: 'Noto Sans TC', styles: ['400', '700'] },
    { name: 'JetBrains Mono', styles: ['400'] }
  ],
  headerFontFamily: ['Titillium Web', 'Noto Sans TC', 'sans-serif'],
  bodyFontFamily: ['Cabin Condensed', 'Noto Sans TC', 'georgia', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.87)',
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 700,
  overrideStyles: ({ rhythm }) => ({
    body: { letterSpacing: '.03em' },
    h2: { marginTop: rhythm(2.5) },
    h3: {
      fontSize: '1.2rem',
      marginTop: rhythm(1)
    },
    li: { marginBottom: rhythm(1 / 3) },
    'li > p': { marginBottom: rhythm(1 / 3) },
    'li > ul': { marginTop: rhythm(1 / 3) },
    [widthEqualOrSmallerThan('sm')]: {
      html: { fontSize: '16px' }
    }
  })
}

const typography = new Typography(customizedTheme)

export const { scale, rhythm, options } = typography
export default typography
