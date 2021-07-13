import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'
import TagIcon from '@assets/tag.svg'

const ArticleTitle = styled(Link)`
  display: block;
  margin: 16px 0;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-text-color);
  transition: var(--transition-duration);

  &:hover {
    color: var(--primary-icon-hover-color);
  }
`

const TagContainer = styled(Flex)`
  cursor: pointer;
  svg {
    fill: var(--secondary-text-color);
    transition: var(--transition-duration);
  }
  &:hover {
    color: var(--secondary-icon-hover-color);
    svg {
      fill: var(--secondary-icon-hover-color);
    }
  }
`

const TagSpan = styled.span`
  cursor: pointer;
`

function Tag({ name }) {
  return (
    <TagContainer alignItems="center">
      <TagIcon height={16} width={16} />
      <TagSpan style={{ marginLeft: 4 }}>{name}</TagSpan>
    </TagContainer>
  )
}

export default function Article({ node }) {
  const { id, fields, excerpt, frontmatter } = node

  return (
    <Box key={id} py={12}>
      <h1>
        <ArticleTitle to={fields.slug}>{frontmatter.title}</ArticleTitle>
      </h1>
      <p>{frontmatter.description || excerpt}</p>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        mb={3}
        color={'var(--secondary-text-color)'}
        fontSize={'0.85rem'}
        sx={{ gap: 3 }}
      >
        <span>{frontmatter.date}</span>
        {frontmatter.tags.map((tag, index) => {
          return <Tag name={tag} key={index} />
        })}
      </Flex>
    </Box>
  )
}
