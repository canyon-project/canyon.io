---
title: 代码插桩
description: 代码插桩描述
---

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


