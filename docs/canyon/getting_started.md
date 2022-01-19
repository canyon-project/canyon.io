---
title: 入门
---

本指南是一个"Hello World"风格的教程，展示了如何安装、配置和使用一个简单的 Canyon 实例。
您将在本地下载并运行 Canyon，之后新建示例项目，配置上报覆盖率所需的babel插件，然后配合UI自动化或者手工测试将覆盖率
上报到服务端。

## 下载并运行 Canyon

[为您的平台下载最新版本](http://canyon.com/#/user)的 Canyon：

```shell
git clone https://github.com/canyon999/canyon.git
```

在启动 Prometheus 之前，让我们对其进行配置。

## 配置数据库连接

修改 conf/app.yml 文件：

```yaml
datasource:
  mysql:
    type: mysql
    host: 127.0.0.1
    port: 3306
    username: root
    password: root
    database: canyon
  mongodb:
    type: mongodb
    host: 127.0.0.1
    port: 27017
    username: root
    password: root
    database: canyon

```

## 启动Canyon

切换到包含 Canyon 目录，安装依赖、构建并运行:
```shell
npm install && npm run build
node dist/main.js
```

## 工程化模块化项目（vue-cli/cra/vite）

前端工程化、模块化离不开babel。如果说你的项目是的话，只需要安装两个babel插件即可快速开始，
[`babel-plugin-istanbul`](https://github.com/istanbuljs/babel-plugin-istanbul) 是istanbul官方维护的babel插件。
[`babel-plugin-canyon`](https://github.com/canyon999/babel-plugin-canyon) 我们是为了便于用户配置项目信息的babel插件。

```shell title="安装babel-plugin-istanbul、babel-plugin-canyon插件"
npm i babel-plugin-istanbul babel-plugin-canyon -D
```


```json title=".babelrc中根据环境选择是否插装"
{
    "plugins": [ 
        "istanbul",
        ["canyon",
            {
                dsn: "http://xxx.com/coverage/client",
                reporter: "reporterToken"
            }] 
        ]
}
```

:::tip

1.由于覆盖率详情需要依赖源代码，所以使用前请至 [`覆盖率平台`](http://canyon.flight.com) 配置项目信息。

2.babel-plugin-canyon 还需要codeHouseId（源ID）、commitSha、repoId（项目ID）的配置，该插件会直接读取环境变量CI_PROJECT_ID，CI_COMMIT_SHA，如需配置可在 .babelrc 中添加相应信息。
:::






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
