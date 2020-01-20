﻿# :bus: 数据筛选过滤软件(体彩排列五选排列三)

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
    "pack": "electron-packager . myClient --win --out ../myClient --arch=x64 --app-version=0.0.1 --electron-version=2.0.0"
}

“.”：需要打包的应用目录（即当前目录），

“myClient”：应用名称，

“--win”：打包平台（以Windows为例），

“--out ../myClient”：输出目录，

“--arch=64”：64位，

“--app-version=0.0.1”：应用版本，

“--electron-version=2.0.0”：electron版本
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