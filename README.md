# :bus: 数据筛选过滤软件(体彩排列五选排列三)

一个前端菜鸟的桌面级应用之旅。

本项目是为西安长安区某彩票公司老板制作的`本地数据筛选软件`, 是本人大二寒假期间做的一个工作室外包项目。

本项目是基于`Electron`,`Node.js`,`原生JS`而构建的数据筛选过滤软件。

* 键入排列三(3位数)与排列五(5位数)数字之后筛选号码
* 类似于体彩大乐透号码选号
* 导入导出文件皆为txt格式(甲方要求)
* 项目一些配置文件都在里面

### 使用方式:

```bash
npm install electron
# Clone this repository
git clone git@github.com:Nonentityboy/Electron-Filter-lottery.git
# Go into the repository
cd Electron-Filter-lottery
# Install dependencies
npm install
# Run the app
npm start
```

### 目录说明

```
├── README.md
├── index.html
├── function.js // 项目功能函数
├── package.json
├── main.js // 项目入口
├── renderer.js
└── style.css // 样式文件
```

### 打包为安装包：

```
npm install electron-packager -g //安装electron打包工具electron-packager
```

```
// 配置打包命令
"scripts": {
    "start": "electron .",
    "pack": "electron-packager . Electron-Filter-lottery --win --out ../Electron-Filter-lottery --arch=x64 --app-version=0.0.1 --electron-version=2.0.0"
}

"."：需要打包的应用目录（即当前目录），

"Electron-Filter-lottery"：应用名称，

"--win"：打包平台（以Windows为例），

"--out ../Electron-Filter-lottery"：输出目录，

"--arch=64"：64位，

"--app-version=0.0.1"：应用版本，

"--electron-version=2.0.0"：electron版本
```

执行打包命令：
```
npm run pack
```

生成了.exe的执行文件以及其他的一堆配置文件，双击Electron-Filter-lottery.exe就可以打开应用程序了.


### 项目预览：

![预览](https://user-gold-cdn.xitu.io/2020/1/20/16fc330013e400a6?w=784&h=591&f=png&s=28309)

当导入排列三号码与排列五号码时：
* 可以点击`导入排列三`和`导入排列五`按钮导入txt格式号码数据
* 也可以直接拖拽文件到改软件内
* 点击对比位数`二三四位`
* 此时排列三的一二三位对应排列五的`二三四位`

![导入号码](https://user-gold-cdn.xitu.io/2020/1/20/16fc33b4bc2785c3?w=772&h=576&f=png&s=57429)


执行过滤之后：

![过滤成功提示](https://user-gold-cdn.xitu.io/2020/1/20/16fc33e7874806b2?w=360&h=113&f=png&s=4062)

![过滤成功](https://user-gold-cdn.xitu.io/2020/1/20/16fc33ef60ccf724?w=772&h=573&f=png&s=39753)

此时点击导出按钮，可以最终导出需要的`排列五`号码。

## 我学到什么？

### Electron 应用架构

#### 主进程与渲染进程

Electron运行`package.json`的 `main` 脚本的进程被称为`主进程`。 
在主进程中运行的脚本通过创建web页面来展示用户界面。 一个 Electron 应用总是有且只有一个主进程。

Electron 使用了 Chromium 来展示 web 页面，所以 Chromium 的多进程架构也被使用到。 每个 Electron 中的 web 页面运行在它自己的渲染进程中。

普通的浏览器中，web页面通常在沙盒环境中运行，并且无法访问操作系统的原生资源。 然而 Electron 的用户在 Node.js 的 API 支持下可以在页面中和操作系统进行一些底层交互。

### 主进程和渲染进程之间的区别

主进程使用 BrowserWindow 实例创建页面。 每个 BrowserWindow 实例都在自己的渲染进程里运行页面。 当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。

主进程管理所有的web页面和它们对应的渲染进程。 每个渲染进程都是独立的，它只关心它所运行的 web 页面。

页面中调用与 GUI 相关的原生 API 是不被允许的，因为在 web 页面里操作原生的 GUI 资源是非常危险的，而且容易造成资源泄露。 如果你想在 web 页面里使用 GUI 操作，其对应的渲染进程必须与主进程进行通讯，请求主进程进行相关的 GUI 操作。

> 题外话：进程间通讯
Electron为主进程 `main process`和渲染器进程`renderer processes`通信提供了多种实现方式，如可以使用`ipcRenderer` 和 `ipcMain`模块发送消息，使用 `remote模块`进行`RPC`方式通信。 

> 如何在两个网页间共享数据？
在两个网页（渲染进程）间共享数据最简单的方法是使用浏览器中已经实现的 HTML5 API。 其中比较好的方案是用 Storage API， localStorage，sessionStorage 或者 IndexedDB。

你还可以用 Electron 内的 IPC 机制实现。将数据存在主进程的某个全局变量中，然后在多个渲染进程中使用 remote 模块来访问它。

```js
// 在主进程中
global.sharedObject = {
  someProperty: 'default value'
}
// 在第一个页面中
require('electron').remote.getGlobal('sharedObject').someProperty = 'new value'
// 在第二个页面中
console.log(require('electron').remote.getGlobal('sharedObject').someProperty)
```