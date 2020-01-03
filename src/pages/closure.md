---
title: 'WIP: 用愛把你包起來！Javascript Closure 的應用'
date: '2019-12-21'
tag: 'javascript'
---

## 1. Closure Basic

先來簡單複習 [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) 的概念：

```js
function foo() {
  let count = 0

  console.log(count) // output: 0
  count++
  console.log(count) // output: 1
}

foo()
console.log(count) // count is not defined
```

關於 [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) 的定義

> The current context of execution. The context in which [values](https://developer.mozilla.org/en-US/docs/Glossary/value) and expressions are "visible" or can be referenced. If a [variable](https://developer.mozilla.org/en-US/docs/Glossary/variable) or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

**count** 這個變數的 scope 在 foo function 內，代表在只能夠在 foo 這個 function 內被讀取， 外部是無法讀取的。

接著再看下一段 [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) 範例：

```js
function counter() {
  // outer function
  let count = 0

  const getCount = () => count // inner function
  const increment = () => count++ // inner function
  const decrement = () => count-- // inner funciton

  getCount() // 0
  increment()
  getCount() // 1
  increment()
  getCount() // 0
}

counter()
```

關於 [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) 的定義

> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

重點是這句：a closure gives you access to an outer function’s scope from an inner function.

以上範例中，`counter` 就是 outer function, getCount, increment, decrement 則是 inner function。
由於 child scope 能夠存取到 parent scope，所以 `getCount` 和 `increment`, `decrement` 能夠存取變數 count 。

如果這個時候我們把這 inner function 回傳的話會怎樣呢？

## 2. Module Pattern

Example 1:

```js
const counter = (function(initialCount) {
  let count = initialCount || 0 // private property
  const change = v => (count += v) // private method
  return {
    // return public methods
    getCount: () => count,
    increment: () => change(1),
    decrement: () => change(-1),
  }
})()

counter.getCount() // 0
counter.increment()
counter.getCount() // 1
counter.decremnet()
counter.getCount() //0
```

Example 2:

```js
function createCounter(initialCount) {
  let count = initialCount || 0 // private property
  const change = v => (count += v) // private method
  return {
    // return public methods
    getCount: () => count,
    increment: () => change(1),
    decrement: () => change(-1),
  }
}

const counter1 = createCounter(0)
const counter2 = createCounter(10)

counter1.getCount() // 0
counter1.increment()
counter1.getCount() // 1
counter1.decremnet()
counter1.getCount() //0

counter2.getCount() // 10
counter2.increment()
counter2.getCount() // 11
counter2.decremnet()
counter2.getCount() //10
```

利用閉包的特性，外部無法存取內部的變數和 function，只能透過回傳的 function 進行操作，達成類似 Object Oriented 的概念。這麼做的好處是可以避免全域汙染，只提 public API，並隱藏實作。

## 3. Currying

在 Currying 之前，我們再來看 Closure 的另一個特性：Closure Scope Channing

> For every closure we have three scopes:
> 1 Local Scope (Own scope)
> 2 Outer Functions Scope
> 3 Global Scope

```js
// Global Scope
let g = 10

function outer2() {
  let z = 3

  function outer1() {
    let y = 2

    function local() {
      let x = 1

      console.log(x) // find: inner
      console.log(y) // find: inner -> outer1
      console.log(z) // find: inner -> outer1 -> outer2
      console.log(g) // find: inner -> outer1 -> outer2 -> global
    }
  }
}
```

因為在目前這個 scope 裡面找不到變數，就會去上一層 function 的 scope 裡面尋找，如果還是找不到，就會再往上一層直到找到為止：
local function scope -> outer1 function scope -> outer2 function scope → global scope
這就是 Closure Scope Channing 的概念。

有了 Closure Scope Channing 的概念後，就可以來看看 currying。
簡而言之，Currying 就是把多參數（Arity > 1）函數轉化成一系列單參數（Arity = 1）的函數

```js
function sum(x, y, z) {
  return x + y + z
}

sum(1, 2, 3) // 6
```

Currying sum：

```js
function sum(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

sum(1)(2)(3) // 6
```

建議透過 [Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 簡化成

```js
const sum = x => y => z => x + y + z
sum(1)(2)(3) // 6
```

## 4. Memorized Function

函數記憶是指將上次的計算結果緩存起来，當下次調用時，如果遇到相同的參數，就直接返回缓存中的結果。所以使用 Memorized 必須有一個先決條件：給予相同的 parameter 必須有相同的 result。

- https://juejin.im/post/59af56a96fb9a0248f4aadb8

這裏參考 [reselect](https://github.com/reduxjs/reselect/blob/master/src/index.js#L21) 的 Source Code，memorize 會接受一個 function 參數，並且回傳一個會記住每次參數的 memorized function。

```js
function memorize(fn) {
  let lastArgs = null
  let lastResult = null
  return function() {
    // 如果 arguments 和上次調用時不同時才呼叫
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      lastResult = func.apply(null, arguments)
    }
    lastArgs = arguments
    return lastResult
  }
}
```

usage:

```js
expensiveCalculation(10)
expensiveCalculation(10) // 仍會呼叫

// 我做的事情和 expensiveCalculation 一樣，不過我多了 Memorized 的超能力！
const memorizedExpensiveCalculation = memorized(expensiveCalculation)

memorizedExpensiveCalculation(10)
memorizedExpensiveCalculation(10) // 參數和上次呼叫時一樣，直接返回 lastResult
memorizedExpensiveCalculation(11) // 參數和上次呼叫時不同，重新計算
```

---

## 5. 常見中英詞彙對照表

| en-gb    | zh-tw  |
| -------- | ------ |
| Scope    | 作用域 |
| Closure  | 閉包   |
| Currying | 柯里化 |
| Function | 函數   |
| Variable | 變數   |

## 6. Further Reading

- https://blog.techbridge.cc/2018/12/08/javascript-closure/
- https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2

## 7. Reference

- https://github.com/reduxjs/reselect/blob/master/src/index.js#L21