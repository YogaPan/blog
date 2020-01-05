import React from 'react'
import { animated, useTransition } from 'react-spring'
import styled, { css } from 'styled-components'
import useThemeSwitch from './useThemeSwitch'
import BaseSunIcon from '../../assets/sun.svg'
import BaseMoonIcon from '../../assets/night.svg'

const Container = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`

const switchIconMixin = css`
  position: absolute;
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: var(--transition-duration);

  &:hover {
    fill: var(--brand-color);
  }
`

const SunIcon = styled(BaseSunIcon)`
  ${switchIconMixin}
  fill: var(--brand-color);

  &:hover {
    fill: var(--primary-icon-hover-color);
  }
`

const MoonIcon = styled(BaseMoonIcon)`
  ${switchIconMixin}
  fill: var(--primary-icon-color);
`

const AnimatedSunIcon = animated(SunIcon)
const AnimatedMoonIcon = animated(MoonIcon)

export default function ThemeSwitch() {
  const [isDarkTheme, toggleTheme] = useThemeSwitch()
  const transitions = useTransition(isDarkTheme, null, {
    config: { duration: 100 },
    initial: null,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  })

  return (
    <Container>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <AnimatedSunIcon key={key} style={props} onClick={toggleTheme} />
        ) : (
          <AnimatedMoonIcon key={key} style={props} onClick={toggleTheme} />
        )
      )}
    </Container>
  )
}
