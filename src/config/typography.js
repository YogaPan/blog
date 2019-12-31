import Typography from 'typography'
import FairyGatesTheme from 'typography-theme-fairy-gates'

FairyGatesTheme.headerWeight = 500
const typography = new Typography(FairyGatesTheme)

export const { scale, rhythm, options } = typography
export default typography
