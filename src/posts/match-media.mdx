---
title: 'Javascript matchMedia 筆記'
date: '2019-12-21'
tag: 'javascript'
---

寫響應式網頁的工程師應該都很熟悉，在 css 中可以利用 [@media](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) 來針對指定的媒體設定樣式。例如說我要讓螢幕寬度 <= 600px 的裝置背景為紅色：

```css
@media (max-width: 600px) {
  body {
    background-color: red;
  }
}
```

不過在某些情境下，需要利用 Javascript 來進行邏輯判斷，這時可以透過 [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) 來查詢：

```js
const mediaQueryList = window.matchMedia('(max-width: 600px)')
```

這裡會回傳一個 [MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) object，其中有幾個重要的屬性：

- [media](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/media): 查詢的 query，以上範例中就是 **(max-width: 600px)**
- [matches](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches): boolean, 代表是否符合 query 條件

值得特別注意的是，回傳的 mediaQueryList 的 matches 會根據最新的查詢結果動態改變。以上面的例子來說，原本查詢的條件為 `false`，但是當我把 browser 的寬度拉到小於 600px 時，不需重新呼叫 window.matchMedia，mediaQueryList.matches 這時會自動更新為 true。

以下為 mediaQueryList 的方法：

- [addListener](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener)
- [removeListener](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/removeListener)

addListener 可以監聽 [MediaQueryListEvent](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent) ，當 query 的結果，也就是 **matches** 發生變化時，可以透過傳入的 callback function 來得知。以下範例

```js
mql.addListener(e => {
  console.log(e.media)
  console.log(e.matches)
})
```

## React Hooks

[react-use](https://github.com/streamich/react-use) 這個 Hooks 的 library 中，有一隻 [useMedia](https://github.com/streamich/react-use/blob/master/docs/useMedia.md)

```jsx
const isWide = useMedia('(min-width: 480px)')

const Demo = () => {
  const isWide = useMedia('(min-width: 480px)')
  return <div>Screen is wide: {isWide ? 'Yes' : 'No'}</div>
}
```

## 實戰演練

TODO

## Futher Reading

對於 CSS Media Query 還不熟悉的話可以參考以下兩篇文章：

- [Using media queries - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [CSS Media Queries 詳細介紹 - OXXO.STUDIO](https://www.oxxostudio.tw/articles/201810/css-media-queries.html)
