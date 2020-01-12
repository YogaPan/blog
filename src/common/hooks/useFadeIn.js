export default function() {
  return useSpring({
    config: { duration: 200 },
    from: { opacity: 0, transform: 'translateY(10px)' },
    opacity: 1,
    transform: 'translateY(0)',
  })
}
