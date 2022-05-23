# 使用 Nodejs

[为您的平台下载最新版本](http://canyon.com/#/user)的 Canyon：

```shell
git clone https://github.com/canyon-project/canyon.git
```

在启动 Canyon 之前，让我们对其进行配置。

## 配置

修改 conf/application.yml 文件：

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

gitlab:
  application:
    clientId: clientId
    clientSecret: clientSecret
    redirectUri: redirectUri
    uri: uri


```


:::tip

本应用采用的是gitlab oauth2.0登陆，详细请查看 [Configure GitLab as an OAuth 2.0 authentication identity provider](https://docs.gitlab.com/ee/integration/oauth_provider.html)

:::

## 启动Canyon

切换到包含 Canyon 目录，安装依赖、构建并运行:

```shell
npm install && npm run build
node dist/main.js
```
