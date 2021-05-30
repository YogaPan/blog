import React from 'react'
import styled from 'styled-components'
import useScrollToTop from '@hooks/useScrollToTop'
import ArrowUpIcon from '@assets/arrow-up.svg'

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
  background-color: var(--scroll-button-color);
  cursor: pointer;
  transition: var(--transition-duration);
  box-shadow: var(--scroll-button-shadow);

  &:hover {
    background-color: #444;
  }
`

export default function FloatingButton() {
  const scrollToTop = useScrollToTop()

  return (
    <ScrollTopButton onClick={scrollToTop}>
      <ArrowUpIcon height={32} width={32} fill={'#fff'} />
    </ScrollTopButton>
  )
}
