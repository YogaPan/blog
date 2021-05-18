import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import FunstonTheme from 'typography-theme-funston'

const customizedTheme = {
  ...FunstonTheme,
  baseFontSize: '18px',
  headerWeight: '700',
  googleFonts: [
    { name: 'Titillium Web', styles: ['400', '700'] },
    { name: 'Cabin Condensed', styles: ['400', '700'] },
    { name: 'Noto Sans TC', styles: ['400', '700'] },
  ],
  headerFontFamily: ['Titillium Web', 'Noto Sans TC', 'sans-serif'],
  bodyFontFamily: ['Cabin Condensed', 'Noto Sans TC', 'georgia', 'sans-serif'],
  plugins: [new CodePlugin()],
}

const typography = new Typography(customizedTheme)

export const { scale, rhythm, options } = typography
export default typography
