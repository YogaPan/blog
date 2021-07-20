import React from 'react'
import { useSpring, animated } from 'react-spring'
import Layout from '@components/Layout/Layout'
import SEO from '@components/Seo'

const AboutMePage = () => {
  const props = useSpring({
    config: { duration: 200 },
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(10px)' }
  })

  return (
    <Layout>
      <SEO pageTitle="About Me" />
      <animated.div style={props}>
        <h1>About Me</h1>
        <p>
          Ut sint sint quo. Dolores sit ut aspernatur ad qui sapiente eius
          tempora. Reprehenderit et ex omnis ullam non soluta. Reprehenderit
          sint doloribus adipisci aut mollitia asperiores suscipit eum. Aut aut
          praesentium mollitia accusamus modi. Quae dolorem debitis vero illum
          doloribus aut ut dolore aut.
        </p>

        <h2>學歷 & 工作經驗</h2>

        <li>輔仁大學資訊工程學系</li>
        <li>天旭國際 - 前端工程師</li>

        <h2>作品列表</h2>
        <ul>
          <li>
            <a href="https://github.com/YogaPan/rookie-homework/tree/master/HW2">
              React Redux 簡易計算機
            </a>
          </li>
          <li>Guitar Tools</li>
          <li>
            <a href="https://spiritnetwork.io/">Spirit Network 官方網站</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </animated.div>
    </Layout>
  )
}

export default AboutMePage
