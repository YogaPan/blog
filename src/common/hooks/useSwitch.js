import { useCallback, useRef, useState } from 'react'

export default initialState => {
  const [state, setState] = useState(initialState || false)
  const ref = useRef()
  ref.current = state
  const toggleState = useCallback(value =>
    setState(typeof value === 'boolean' ? value : !ref.current)
  )
  return [state, toggleState]
}
