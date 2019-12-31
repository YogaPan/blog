---
title: 'ZSH Tips 1: Goto any Repository from AnyWhere'
date: '2019-12-21'
tag: 'zsh shell'
---

## Step1: 自訂工作目錄，將所有專案集中管理

我自己個人的習慣是把所有程式相關的 Repository 放在 `~/Developer` 目錄下，並且 export `WORKSPACE` 這個變數，方便 zsh script 讀取：

```shell
export WORKSPACE=~/Developer
```

## Step2: 定義腳本行為

```shell
c() {
  cd $WORKSPACE/$1
}
```

為求快速，這裡把 zsh function 定義成左手輸入的單一字母，`c` 讓你能夠到達 `WORKSPACE` 底下任一目錄：

```shell
$ c application-backoffice  # 等於 cd ~/Developer/application-backoffice
```

然而，你該不會以為真的會有人想要手打這一長串又臭又長的專案名稱吧 🙄️

## Step3: 利用 zsh completion 讓你擁有超能力

```shell
# initialize autocomplete here, otherwise functions won't be loaded
autoload -U compinit
compinit

c() {
  cd $WORKSPACE/$1
}

_c() {
  _files -W $WORKSPACE -/
}

# At end of file, otherwise function may not be called.
compdef _c c
```

- compdef: 對應補全 function
- \_files: complete filepaths
- -W: 指定路徑 prefix
- -/: 只匹配 directory

## Demo Time:

GIphy Here

## Reference & Further Reading

- https://github.com/zsh-users/zsh-completions/blob/master/zsh-completions-howto.org
- http://zsh.sourceforge.net/Doc/Release/Completion-System.html
