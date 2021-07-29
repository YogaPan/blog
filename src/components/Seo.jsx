/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import { useLocalStorage, useMount } from 'react-use'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const mergeTitle = (siteTitle, pageTitle) => {
  if (!pageTitle) return siteTitle
  return `${pageTitle} - ${siteTitle}`
}

function SEO({ pageTitle, pageDescription, lang, meta }) {
  const [theme] = useLocalStorage('theme')
  const [preload, setPreload] = useState(true)

  useMount(() => {
    document.readyState === 'complete'
      ? setPreload(false)
      : window.addEventListener('load', () => setPreload(false))
  })

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const title = mergeTitle(site.siteMetadata.title, pageTitle)
  const description = pageDescription || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: site.siteMetadata.author },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description }
      ].concat(meta)}
    >
      <html data-theme={theme} data-preload={preload} lang={lang} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-156129570-1"
      ></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-156129570-1');
        `}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}

SEO.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
}

export default SEO
