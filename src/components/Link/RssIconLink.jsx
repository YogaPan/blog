import React from 'react'
import Link from '@components/Link/Link'
import RssIcon from '@assets/rss.svg'

export default function RssIconLink() {
  return (
    <Link.Outside href="/rss.xml">
      <RssIcon />
    </Link.Outside>
  )
}
