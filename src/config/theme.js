const breakpoints = ['480px', '576px', '768px', '992px', '1200px', '1600px']

breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xxl = breakpoints[5]

export const widthSmallerThan = size => `max-width:${breakpoints[size] - 1}px`
export const widthLargerThan = size => `min-width:${breakpoints[size] - 1}px`
export const widthEqualOrSmallerThan = size =>
  `max-width:${breakpoints[size]}px`
export const widthEqualOrLargerThan = size => `min-width:${breakpoints[size]}px`

export default {
  breakpoints,
  spaces: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: ['32px', '30px', '20px'],
  lineHeights: [],
  borders: [],
  sizes: [],
  colors: {
    black: '000',
    white: '#fff',
    blacks: ['#000', '#0f111a', '#090b10'],
    whites: ['#fff', '#f8f8f8'],
    green: ['#1ca086', '#3fccb0'],
    blue: ['#0077b5']
  }
}
