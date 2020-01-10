---
title: 'WIP: 你這個小壞蛋! Inline Element 的 CSS 注意事項'
date: '2020-01-01'
tag: 'javascript'
---

## 屁話寫在這裡

TODO: CSS 拉窗簾的梗圖

自己真的要用 CSS 去刻出一個網站的時候
inline element 容易遇到的坑

## Inline Element

這裡有一個很方便的工具可以查詢： 可以到 [HTML Reference](https://htmlreference.io/) 查詢元素 Display。

以下列出 Inline Element 奇異特性：

1. 設定 _height_ 無效
2. 設定 _margin-top/maring-bottom_ 無效，
3. 可以設定 _padding-top/padding-bottom_，但是行為不符合預期，建議不要使用
4. 彼此之間會有 4px 的間距 ???

<iframe
  src="https://codesandbox.io/embed/inline-element-g6kgs?fontsize=14&hidenavigation=1&theme=dark"
  style="width:1000px; height:500px; border:0; border-radius: 4px; overflow:hidden; align-self: center;"
  title="Inline Element"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

這裏比較神奇的是

## Inline Block Element

```css
span {
  display: inline-block;
}
```

Inline Block Element

- 可以設定 height
- 可以設定 margin-top/maring-bottom
- 可以設定 padding-top/padding-bottom
- 彼此之間會有 4px 的間距

Generally, inline elements may contain only data and other inline elements. You can't put block elements inside inline elements. -> https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

## Solution:

可以看到很多很 Tricky 的解法。我的感想是：一坨狗屎。

## Further Reading

- TODO
- TODO
