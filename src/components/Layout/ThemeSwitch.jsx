import React from 'react'
import useSwitch from '../../common/hooks/useSwitch'
import useDidUpdate from '../../common/hooks/useDidUpdate'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;

  .switch {
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: var(--transition-duration);
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: var(--transition-duration);
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--brand-color);
    border-radius: 34px;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  input:focus + .slider {
    border-radius: 34px;
    box-shadow: 0 0 1px var(--brand-color);
  }
`

const utils = {
  setTheme: isDarkTheme => {
    if (isDarkTheme) {
      document.querySelector('html').setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.querySelector('html').setAttribute('data-theme', '')
      localStorage.setItem('theme', '')
    }
  },
}

export default function ThemeSwitch() {
  const [isDarkTheme, toggleTheme] = useSwitch(
    () => localStorage.getItem('theme') === 'dark'
  )

  useDidUpdate(() => {
    utils.setTheme(isDarkTheme)
  }, [isDarkTheme])

  return (
    <Container>
      <label className="switch">
        <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </Container>
  )
}
