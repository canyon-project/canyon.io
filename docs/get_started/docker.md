# 使用 Docker

Canyon 的 Docker 镜像放在 [`Docker Hub`](https://hub.docker.com/r/zhangtao25/canyon) 上。

在 Docker 上运行 `docker run -p 8080:8080 zhangtao25/canyon`，这将使用示例配置启动 Canyon，并将其暴露在端口 8080 上。

要提供您自己的配置，有几个选项。这里有两个例子。

## 卷(volumes) & 绑定挂载

启动时把主机的 `application.yml` 挂载到容器内

```shell
docker run \
    -p 8080:8080 \
    -v /path/to/application.yml:/usr/src/app/conf/application.yml \
    zhangtao25/canyon
```

## 自定义镜像

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
