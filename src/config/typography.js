import Typography from 'typography'
import FunstonTheme from 'typography-theme-funston'

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
  bodyFontFamily: ['Cabin Condensed', 'Noto Sans TC', 'georgia', 'sans-serif']
}

const typography = new Typography(customizedTheme)

export const { scale, rhythm, options } = typography
export default typography
