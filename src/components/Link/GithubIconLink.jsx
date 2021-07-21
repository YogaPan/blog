import React from 'react'
import Link from '@components/Link/Link'
import GithubIcon from '@assets/github.svg'

export default function GithubIconLink() {
  return (
    <Link.Outside href="https://github.com/YogaPan">
      <GithubIcon />
    </Link.Outside>
  )
}
