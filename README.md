# ts-declaration-files-example

其中的JS代码来自《Web开发权威指南》一书中的CoffeeRun项目。

（当然也有TS编译生成的，笑）

需要在types目录使用tsc --outDir ../scripts main.ts，

或者配置WebStorm编译选项为--outDir scripts，

又或者自己写一个tsconfig.json，在里面配置输出路径，

实在不行编译完了手动复制过去；

总之，要在scripts目录里生成一个main.js，

才能正常运行。

话说，运行一个**普通的**Web项目应该不是问题。

另外，这**不是**一个Node项目。

之所以有package.json，是为了解决可能存在的ts版本错误导致的编译问题。

来龙去脉请见[博客](https://blog.csdn.net/HermitSun/article/details/96478912)。
