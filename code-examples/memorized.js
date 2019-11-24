function memorized() {
  // TODO
  let lastArgs
  let lastResult

  return function() {
    return lastResult
  }
}
