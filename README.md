# 项目创建及相关配置
进入指定目录下创建文件夹，将其命名为keep-accounts-react，用webstorm打开，打开终端，运行create-react-app . --template typescript，“.”是指在当前目录下创建，“ --template typescript”是指使用TS而不是JS。
yarn start（运行 echo 'BROWSER=none' > .env，设置为手动打开浏览器）
在 .gitignore 添加 /.idea （.idea文件是webstorm自动添加的）。

CSS配置
在index.css添加@import-normalize；
作用：保证页面在不同浏览器上默认样式相近。
编辑器不认识这个语法，会报错，关闭这个报错即可。

scss支持，
运行： yarn add --dev node-sass@npm:dart-sass
将所有的.css 改为 .scss即可
（博客：https://zhuanlan.zhihu.com/p/421975166）

css @import引用
直接用@import 'xxx/yyy' 来引用src/xxx/yyy.scss
webstorm不知道这种写法，需要将src设置为Mark Directory as Resource root

JS中的引用

在tsconfig.json 中添加配置
`
{
"compilerOptions": {
"baseUrl": "src"
},
"include": ["src"]
}
`
创建src/helper.scss
helper里放置变量、函数等公用的东西，在index.scss中引用@import "helper"

CSS-in-JS方案
样式组件 styled-components
利用标记的模板文字来设置组件的样式。

利用标记的模板文字和 CSS 的强大功能，styled-components 允许您编写实际的 CSS 代码来设置组件的样式。它还删除了组件和样式之间的映射——使用组件作为低级样式构造再简单不过了！
好处：https://styled-components.com/docs/basics#getting-started

模板字符串 Template literals (Template strings)
模板字面量 是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能。

描述
模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符。占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来，如果一个模板字符串由表达式开头，则该字符串被称为带标签的模板字符串，该表达式通常是一个函数，它会在模板字符串处理后被调用，在输出最终结果前，你都可以通过该函数来对模板字符串进行操作处理。在模版字符串内使用反引号（`）时，需要在它前面加转义符（\）。

https://styled-components.com/docs
https://github.com/styled-components/styled-components/blob/main/README.md
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals
安装：前者是JS源码，后者是TS类型声明文件
yarn add styled-components
yarn add --dev @types/styled-components

制作底部导航
用React Router 实现导航
安装react router
https://reactrouter.com/web/guides/quick-start
yarn add react-router-dom
yarn add --dev @types/react-router-dom

#样式内容完善
首先src/
创建目录views（用来存放各个视图）
创建目录components（存放各部分组件）
创建helper.scss （helper里放置变量、函数等公用的东西，在index.scss中引用@import "helper"）

制作底部导航栏
复制官方文档的例子，再次基础上进行修改，设置默认页面和404页面。
在components中建立Navigation.tsx文件，用来制作导航栏
使用NavLink代替Link

