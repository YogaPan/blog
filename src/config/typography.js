import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import FunstonTheme from 'typography-theme-funston'

FunstonTheme.headerWeight = 500
FunstonTheme.baseFontSize = '18px'
FunstonTheme.plugins = [new CodePlugin()]

const typography = new Typography(FunstonTheme)

export const { scale, rhythm, options } = typography
export default typography
