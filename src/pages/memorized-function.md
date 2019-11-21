---
title: "利用 Closure 實作 memorized function"
date: "2019-11-28"
tag: "javascript"
---

## Table of Content

- javascript 中的閉包
- 閉包的作用

先來複習一下 Javascript 的閉包

```js
function createCountFunction() {
  let count = 0
}
```

count 這個變數在只能夠在 createCountFunction 這個 function 內被讀取， 外部是無法讀取的。

```js
function createCountFunction() {
  let count = 0

  function logCount() {
    console.log(count)
  }

  logCount()
}
```

```js
const count = createCountFunction()

console.log(addOne())
console.log(addOne())
```

```js
function expensiveCalculation() {
  // TODO
}
```

```js
function memorize(fn) {
  let lastArgs = null
  let lastResult = null

  return function() {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      lastResult = func.apply(null, arguments)
    }

    lastArgs = arguments
    return lastResult
  }
}
```

usage

```js
```

## Reference

- [Closures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [reselect/index.js at master · reduxjs/reselect](https://github.com/reduxjs/reselect/blob/master/src/index.js#L21)
