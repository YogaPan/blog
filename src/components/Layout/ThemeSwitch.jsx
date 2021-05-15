import React from 'react'
import { animated, useTransition } from 'react-spring'
import styled, { css } from 'styled-components'
import BaseSunIcon from '@assets/sun.svg'
import BaseMoonIcon from '@assets/night.svg'
import useThemeSwitch from './useThemeSwitch'

const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;

  svg {
    fill: var(--theme-icon-color);
  }

  &:hover svg {
    fill: var(--theme-icon-hover-color);
  }
`

const switchIconMixin = css`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: var(--transition-duration);
`

const SunIcon = styled(BaseSunIcon)`
  ${switchIconMixin}
`

const MoonIcon = styled(BaseMoonIcon)`
  ${switchIconMixin}
`

const AnimatedSunIcon = animated(SunIcon)
const AnimatedMoonIcon = animated(MoonIcon)

export default function ThemeSwitch() {
  const [isDarkTheme, toggleTheme] = useThemeSwitch()
  const transitions = useTransition(isDarkTheme, {
    config: { duration: 100 },
    initial: null,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  })

  return (
    <Container onClick={toggleTheme}>
      {transitions((props, item, key) =>
        item ? (
          <AnimatedSunIcon key={key} style={props} />
        ) : (
          <AnimatedMoonIcon key={key} style={props} />
        )
      )}
    </Container>
  )
}
