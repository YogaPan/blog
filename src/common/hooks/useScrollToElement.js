import { useSpring } from 'react-spring'

export default function useScrollToElement() {
  const [, api] = useSpring(() => ({ y: 0 }))
  let isStopped = false

  const onWheel = () => {
    isStopped = true
    window.removeEventListener('wheel', onWheel)
  }

  const onRest = () => {
    isStopped = false
    window.removeEventListener('wheel', onWheel)
  }

  const onChange = (_, ctrl) => {
    if (!isStopped) window.scroll(0, ctrl.get().y)
  }

  const scrollToTarget = (node) => {
    const value = window.scrollY + node.getBoundingClientRect().top
    window.addEventListener('wheel', onWheel)
    api.start({
      y: value,
      reset: true,
      from: { y: window.scrollY },
      onRest,
      onChange,
    })
  }

  return { scrollToTarget }
}
