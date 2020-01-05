import React from 'react'
import { useSpring } from 'react-spring'
import styled from 'styled-components'
import ArrowUpIcon from '@assets/arrow-up.svg'
import ShareIcon from '@assets/share.svg'

const ScrollTopButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  height: 56px;
  width: 56px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: black;
  background-color: var(--scroll-button-color);
  cursor: pointer;
  transition: var(--transition-duration);
  box-shadow: var(--scroll-button-shadow);

  &:hover {
    background-color: #444;
  }
`

export default function FloatingButton() {
  const [, setY] = useSpring(() => ({ y: 0 }))

  return (
    <ScrollTopButton
      onClick={() => {
        setY({
          y: 0,
          reset: true,
          from: { y: window.scrollY },
          onFrame: props => window.scroll(0, props.y),
        })
      }}
    >
      <ArrowUpIcon height={32} width={32} fill={'#fff'} />
    </ScrollTopButton>
  )
}
