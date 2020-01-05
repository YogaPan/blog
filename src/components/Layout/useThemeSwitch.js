import { useLocalStorage, useUpdateEffect } from 'react-use'

export default function() {
  const [theme, setTheme] = useLocalStorage('theme', '')
  const isDarkTheme = theme === 'dark'

  useUpdateEffect(() => {
    document
      .querySelector('html')
      .setAttribute('data-theme', isDarkTheme ? 'dark' : '')
  }, [isDarkTheme])

  return [isDarkTheme, () => setTheme(isDarkTheme ? '' : 'dark')]
}
