---
title: 获取文件存档
sidebar_label: 获取文件存档
description: 介绍gitlab/github拉取代码流程
---

该应用的覆盖率详情依赖于源代码，所以需要提前配置获取文件存档的必要信息，下面介绍gitlab、github获取文件存档流程

## Gitlab

获取存储库的存档。如果存储库可公开访问，则无需身份验证即可访问。

```shell
GET /projects/:id/repository/archive[.format]
```

format是存档格式的可选后缀，默认为 tar.gz。选项包括tar.gz，tar.bz2，tbz，tbz2，tb2， bz2，tar，和zip。例如，指定archive.zip 将发送 ZIP 格式的存档。

支持的属性：

| 属性  | 类型  | 必需的 | 	描述                                             |
|-----| ----  |-----|-------------------------------------------------|
| id | integer or string | 是   | gitlab项目的ID                                     |
| sha | string | 否   | 要下载的COMMIT_SHA |

示例请求：

```shell
curl --header "PRIVATE-TOKEN: <your_access_token>" "https://gitlab.com/api/v4/projects/<project_id>/repository/archive?sha=<commit_sha>"
```

:::tip

更多细节可查看 [gitlab文档](https://docs.gitlab.com/ee/api/repositories.html#get-file-archive)

:::

## Github

```shell
GET /repos/{owner}/{repo}/zipball/{ref}
```

示例请求：

```shell
curl --header "Authorization: Bearer <your_access_token>" "https://api.github.com/repos/owner-name/repo-name/zipball/ea08d1d9a5c8a0a613c5db7b04d74f5fa76f48d3"
```
:::tip

更多细节可查看 [github文档](https://docs.github.com/cn/rest/reference/repos#download-a-repository-archive-zip)

:::
