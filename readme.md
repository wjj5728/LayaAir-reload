## Laya 的自动编译

由于 laya 的 ide 需要按 F6 编译运营，每次都需要从 vscode 切换，开发效率非常低，尝试过使用 webpack，但是有点侵入性，需要改一些代码，不易于后续开发人员维护，这里利用的是 layaair2-cmd 编译，browser-sync 开启本地服务。

### Start

layaair2-cmd 需要全局安装

```cmd
npm i -g layaair2-cmd
```

在项目中安装 browser-sync 以及 gulp

```cmd
npm i browser-sync gulp
```

复制 gulpfile 到项目目录，执行 **gulp compile**

本地服务地址：
http://localhost:3000

### 注意

1. 因为原本 laya 的编译就会比较慢一点，多按可能会导致多次刷新。
2. 涉及到 ide 中的 ui 导出问题，还是需要按 F12 导出，这个 layaair2-cmd 没法处理。

### 最后

有更好的方案，记得暗示我一下
