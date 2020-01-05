import useSwitch from '../../common/hooks/useSwitch'
import useDidUpdate from '../../common/hooks/useDidUpdate'

const utils = {
  changeTheme: isDarkTheme => {
    if (isDarkTheme) {
      document.querySelector('html').setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.querySelector('html').setAttribute('data-theme', '')
      localStorage.setItem('theme', 'light')
    }
  },
}

export default function() {
  const [isDarkTheme, toggleTheme] = useSwitch(() => {
    if (typeof window !== 'undefined')
      return localStorage.getItem('theme') === 'dark'
  })

  useDidUpdate(() => {
    utils.changeTheme(isDarkTheme)
  }, [isDarkTheme])

  return [isDarkTheme, toggleTheme]
}
