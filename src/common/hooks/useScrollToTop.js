import useScrollToElement from './useScrollToElement'

export default function useScrollToTop() {
  const { scrollToTarget } = useScrollToElement()
  return () => scrollToTarget(document.body)
}
