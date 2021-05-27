import { useSpring } from 'react-spring'

export default function useFadeIn() {
  return useSpring({
    config: { duration: 200 },
    from: { opacity: 0, transform: 'translateY(10px)' },
    opacity: 1,
    transform: 'translateY(0)'
  })
}
