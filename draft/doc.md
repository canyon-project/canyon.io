## 介绍

Canyon 是一个JavaScript代码覆盖率收集平台。通过简单的babel插件配置即可实现覆盖率上传和实时报告生成。

### 概念

本节介绍了 Canyon 的架构，它如何插桩代码和上报覆盖率，并介绍了系统的特性和功能。

- 架构图

- 覆盖率

- 代码插桩

- 覆盖率上报

## 概念

### 架构图

此图说明了 Canyon 的架构及其一些生态组件：

Canyon提供了 babel-canyon-plugin 以搭配 istanbul 上报工程覆盖率。工程发布后在UI自动化测试或者手工测试时触发覆盖率  
上报方法，服务端进行覆盖率数据存储，当查看工程覆盖率详情时，服务端会将原始覆盖率数据拉取出来聚合计算工程覆盖率概况，以及  
通过预先配置好的git代码源拉取源代码进行覆盖率详情回溯。

### 什么是覆盖率？

覆盖率是度量测试完整性的一个手段，是测试有效性的一个度量。通过已执行代码表示，用于可靠性、稳定性以及性能的评测  

它有四个测量维度。  

- **行覆盖率**（line coverage）：是否每一行都执行了？  
- **函数覆盖率**（function coverage）：是否每个函数都调用了？  
- **分支覆盖率**（branch coverage）：是否每个if代码块都执行了？  
- **语句覆盖率**（statement coverage）：是否每个语句都执行了？



## 开始使用

如果已经部署好Canyon平台，可直接跳至“上报一个覆盖率示例”

### 使用 Docker

Canyon 的 Docker 镜像放在 [`Docker Hub`](https://hub.docker.com/r/zhangtao25/canyon) 上。

在 Docker 上运行 `docker run -p 8080:8080 zhangtao25/canyon`，这将使用示例配置启动 Canyon，并将其暴露在端口 8080 上。

要提供您自己的配置，有几个选项。这里有两个例子。

#### 卷(volumes) & 绑定挂载

启动时把主机的 `application.yml` 挂载到容器内

```shell
docker run \
    -p 8080:8080 \
    -v /path/to/application.yml:/usr/src/app/conf/application.yml \
    zhangtao25/canyon
```

#### 自定义镜像

为此，使用 Canyon 配置创建一个新目录， `Dockerfile` 如下所示：

```dockerfile
FROM zhangtao25/canyon
ADD application.yml /usr/src/app/conf/
```

现在构建并运行它：

```shell
docker build -t my-canyon .
docker run -p 8080:8080 my-canyon
```

本指南是一个"Hello World"风格的教程，展示了如何安装、配置和使用一个简单的 Canyon 实例。
您将在本地下载并运行 Canyon，之后新建示例项目，配置上报覆盖率所需的babel插件，然后配合UI自动化或者手工测试将覆盖率
上报到服务端。



### 源代码安装



#### 下载并运行 Canyon

[为您的平台下载最新版本](http://canyon.com/#/user)的 Canyon：

```shell
git clone https://github.com/canyon999/canyon.git
```

在启动 Prometheus 之前，让我们对其进行配置。

#### 配置数据库连接

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

#### 启动Canyon

切换到包含 Canyon 目录，安装依赖、构建并运行:

```shell
npm install && npm run build
node dist/main.js
```

### 上报一个覆盖率示例

#### 代码插桩

前端工程化、模块化离不开babel。如果说你的项目是的话，只需要安装两个babel插件即可快速开始，  
[`babel-plugin-istanbul`](https://github.com/istanbuljs/babel-plugin-istanbul) 是istanbul官方维护的babel插件。  
[`babel-plugin-canyon`](https://github.com/canyon999/babel-plugin-canyon) 我们是为了便于用户配置项目信息的babel插件。  

```shell
npm i babel-plugin-istanbul babel-plugin-canyon -D  
```

```json
{  
 "plugins": [        "istanbul",  
 ["canyon", { dsn: "http://xxx.com/coverage/client", reporter: "reporterToken" }]        ]  
}  
```

:::tip  

1.由于覆盖率详情需要依赖源代码，所以使用前请至 [`覆盖率平台`](http://canyon.flight.com) 配置项目信息。  

2.babel-plugin-canyon 还需要codeHouseId（源ID）、commitSha、repoId（项目ID）的配置，该插件会直接读取环境变量CI_PROJECT_ID，CI_COMMIT_SHA，如需配置可在 .babelrc 中添加相应信息。  
:::  

babel-plugin-canyon 插件不仅将用户配置的信息存在的**window.canyon**上，并且还在window上添加了一个**reportCoverage**方法供调用。  

#### 覆盖率上报

需要在每个页面case结束时，触发window上的reportCoverage方法，将覆盖率上报。  

```js
window.reportCoverage()  
```

#### 亦可手工测试(提供 [canyon-crx](https://chrome.google.com/webstore/detail/islin-crx/omnpafdjidgpdmlimbangcjjaaodbeof?hl=zh-CN&authuser=0) Chrome扩展)

#### 参数解释

dns: 覆盖率上报接口，可用 http://canyon.com/coverage/client  

reporter: 上报人的身份令牌，请至 [覆盖率平台](http://canyon.com/#/user) 查看  

repoId: 仓库ID，会自动读取环境变量CI_PROJECT_ID  

commitSha: 会自动读取环境变量CI_COMMIT_SHA  

codeHouseId: 源ID，默认1，git.dev  

coverage: 项目覆盖率对象

## 特征

### 支持docker镜像部署

## 参考
