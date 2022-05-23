---
sidebar_position: 1
title: 常见问题
---

## 覆盖率文件不完整

### .ts缺失

可能你的项目是这样配置的🤔

```js
{
    rules: [
        {
            test: /\.(js|jsx)$/,
            use:['babel-loader'],
            exclude:'/node_modules/'
        },
        {
            test: /\.(ts|tsx)$/,
            use:['ts-loader'],
            exclude:'/node_modules/'
        }
    ]
}
```

由于 babel-plugin-istanbul 是依赖于babel的，所以需要改成：

```js
{
    rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            use:['babel-loader','ts-loader'],
            exclude:'/node_modules/'
        }
    ]
}
```

💡或者使用 **@babel/preset-typescript**

:::tip

ts-loader在内部是调用了**TypeScript的官方编译器 – tsc**，所以第一种写法的**并没有经过babel转译**，也就没有享受到babel的对JavaScript代码的兼容性处理。

**问题**：用了typescript还需要babel或者polyfill吗？ [回答一](https://www.zhihu.com/question/322722786)、[回答二](https://segmentfault.com/a/1190000010106158)

:::


