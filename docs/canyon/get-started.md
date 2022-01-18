---
title: 快速开始
---

babel-plugin-canyon 插件不仅将用户配置的信息存在的**window.canyon**上，并且还在window上添加了一个**reportCoverage**方法供调用。

## 配合UI自动化上报

需要在每个页面case结束时，触发window上的reportCoverage方法，将覆盖率上报。
```js
window.reportCoverage()
```

## 亦可手工测试(提供 [canyon-crx](https://chrome.google.com/webstore/detail/islin-crx/omnpafdjidgpdmlimbangcjjaaodbeof?hl=zh-CN&authuser=0) Chrome扩展)

## 参数解释

dns: 覆盖率上报接口，可用 http://canyon.com/coverage/client

reporter: 上报人的身份令牌，请至 [覆盖率平台](http://canyon.com/#/user) 查看

repoId: 仓库ID，会自动读取环境变量CI_PROJECT_ID

commitSha: 会自动读取环境变量CI_COMMIT_SHA

codeHouseId: 源ID，默认1，git.dev

coverage: 项目覆盖率对象
