---
title: 'WIP: 暗黑浪潮來襲！ 教你用 CSS Variable 實現網站 Dark Mode'
date: '2020-01-01'
tag: 'javascript'
---

黑是一種態度、是深沈、是內斂、是純粹，同時兼具感性與性感。黑色對工程師有著致命的吸引力。

「哇！太酷了吧！寫出這種暗色系網站的工程師一定是個很有態度的人！」

本篇文章會帶你用 CSS Variable 和 LocalStorage API 實作出 Dark Mode。
相信坐在螢幕前的 User 也一定能夠感受到工程師所注入的愛。

## CSS Variable

參考資料: https://muki.tw/tech/native-css-variables/

### 先確定能否使用

由於 [CSS Variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 是較新的技術，建議先到 [Can I Use](https://caniuse.com/#search=css%20variable) 查詢瀏覽器的支援度。可以看到主流瀏覽器都已經支援這個語法了，如果沒有要顧慮到 IE 的話我們就給他大力用下去吧！

IE 表示：
![我就爛](../images/我就爛.jpeg)

## 基本語法

- `--`
- var()

```css
--main-color: black;
color: var(--main-color);
```

- _--main-color_ 是變數名稱，_black_ 是該變數的值
- 變數命名的規則為：開頭必須是兩個破折號 --

## 為什麼要使用 CSS Variable？

大型網站中，可能會有很多重複的值，像是顏色、字型大小等等
以下舉例：

```css
.block-1 {
  color: #878787;
  height: 300px;
  width: 200px;
}

.block-2 {
  background-color: #878787;
}

.block-3 {
  background-color: #878787;
  color: red;
}
```

再回到上遍的例子，
而且 _main-bg-color_ 也比 _#878787_ 更語意化、更好理解。

codesandbox goes here...

## Switch

到了這裡，我們的世界已經有了白天，然而卻沒有黑夜、有了光明，卻沒有陰影。為此我們需要一個開關，並為人所控，彌補明暗不可控的缺憾。

<iframe
  height="500px"
  style="width: 80vw; border: 0; border-radius: 5px; align-self: center"
  src="https://codesandbox.io/embed/eloquent-platform-dszbz?view=splite"
></iframe>

如何用 Css 刻出 Check Box 並不是本篇的重點，如果覺得麻煩或是棘手可以直接複製以上的程式碼。

## Local Storage API

到這裡還有一個問題：隨著網頁重整或是再次進入，必須要手動再次開啟 Dark Mode，網站不會記著上次的 Theme。
我們需要一個可以永久記住 Color Theme、且足夠簡單的方法: localStorage API。

## Theme by Browser

Chrome 79 新特性
https://developers.google.com/web/updates/2019/10/devtools#cookiepreviews

## Futher Reading

- 1
- 2
- 3

## Reference

- [Using CSS custom properties (variables) - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
