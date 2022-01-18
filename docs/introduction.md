---
title: 介绍
---

# 介绍

Canyon 是一个JavaScript代码覆盖率收集平台。通过简单的babel插件配置即可实现覆盖率上传和实时报告生成。


## 背景

前端缺少像jacoco这样的集成测试覆盖率统计框架, 无法通过集成测试收集覆盖率。


## 技术调研

首先介绍一些前置知识

### 覆盖率

>
>
>覆盖率是度量测试完整性的一个手段，是测试有效性的一个度量。通过已执行代码表示，用于可靠性、稳定性以及性能的评测 [`百度百科`](https://baike.baidu.com/item/%E8%A6%86%E7%9B%96%E7%8E%87)



它有四个测量维度。

- **行覆盖率**（line coverage）：是否每一行都执行了？
- **函数覆盖率**（function coverage）：是否每个函数都调用了？
- **分支覆盖率**（branch coverage）：是否每个if代码块都执行了？
- **语句覆盖率**（statement coverage）：是否每个语句都执行了？



#### 覆盖率的意义

1.覆盖率是测试同学非常关注且直观的指标。

2.代码覆盖率是查找代码库中未测试部分的有用工具，然而它作为一个数字说明你的测试有多好用处不大。

3.覆盖率低很大程度上代码质量会有问题。

### 插桩

#### 什么是代码插桩

>
>在保证被测程序原有逻辑完整性的基础上在程序中插入一些探针（又称为“探测仪”，本质上就是进行信息采集的代码段，可以是赋值语句或采集覆盖信息的函数调用） [`百度百科`](https://baike.baidu.com/item/%E7%A8%8B%E5%BA%8F%E6%8F%92%E6%A1%A9)

#### 插桩方式


| 插桩方式              | 功能                                           | 优势                             | 劣势                                                         |
| --------------------- |----------------------------------------------| -------------------------------- | ------------------------------------------------------------ |
| nyc                   | 直接给js源文件插桩，例如nyc instrument [input] [output] | 编译后的js都可插桩，不限工程类型 | 虽然可以通过sourceMap还原源文件覆盖率，但是其中配置繁杂，坑多 |
| babel-plugin-istanbul | 在babel编译时，自动生成插桩代码                           | 改造成本低，一键起飞             | 仅限于babel工程                                              |




#### 代码插桩前后对比

```javascript
// 前
function add(a,b) {
    return a + b
}

console.log(add(1,2))
```

```javascript
// 后
function cov_18h8z155td() {
    var path = "/Users/zhangtao/Desktop/flight/canyon-project/corp/canyon-test/main.js";
    var hash = "f3b515852f4c4ee1f0e3586dd9512fe6f332ac00";
    var global = new Function("return this")();
    var gcv = "__coverage__";
    var coverageData = {
        path: "/Users/zhangtao/Desktop/flight/canyon-project/corp/canyon-test/main.js",
        statementMap: {
            "0": {start: {line: 2, column: 4}, end: {line: 2, column: 16}},
            "1": {start: {line: 5, column: 0}, end: {line: 5, column: 21}}
        },
        fnMap: {
            "0": {
                name: "add",
                decl: {start: {line: 1, column: 9}, end: {line: 1, column: 12}},
                loc: {start: {line: 1, column: 18}, end: {line: 3, column: 1}},
                line: 1
            }
        },
        branchMap: {},
        s: {"0": 0, "1": 0},
        f: {"0": 0},
        b: {},
        _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
        hash: "f3b515852f4c4ee1f0e3586dd9512fe6f332ac00"
    };
    var coverage = global[gcv] || (global[gcv] = {});
    if (!coverage[path] || coverage[path].hash !== hash) {
        coverage[path] = coverageData;
    }
    var actualCoverage = coverage[path];
    {// @ts-ignore
        cov_18h8z155td = function () {
            return actualCoverage;
        };
    }
    return actualCoverage;
}

cov_18h8z155td();

function add(a, b) {
    cov_18h8z155td().f[0]++;
    cov_18h8z155td().s[0]++;
    return a + b;
}

cov_18h8z155td().s[1]++;
console.log(add(1, 2));
//# sourceMappingURL=...
```

:::tip
插桩的本质是在代码中插入“计数器”，代码执行时触发。
:::









## 解决方案

![Example banner](./get-started/架构图.png)


1.提供babel-plugin-canyon配合babel-plugin-istanbul配置工程信息和代码插桩。

2.工程构建完毕后，经过UI自动化测试或手工测试，结束后将覆盖率上报至canyon服务端。

3.服务端通过配置的git源和仓库ID拉取代码用于覆盖率详情展示。覆盖率数据和对应工程信息存入database，
与此同时会根据预先配置的工程信息实时生成覆盖率报告文件。

4.提供web界面用户新增、查询工程覆盖率信息。
