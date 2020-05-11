### 1.0.4

`2020年4月14日`

- **Feature**
  - 🌟 增加全局环境变量`__IS_PROD__`，判断是否是生产环境
  - 🌟 增加 TypeScript 3.7 新特性支持（具体请看`src/pages/TsNew`）
- **Bug Fix**
  - 🐞 修改使用 ts 可选调用时报`no-unused-expressions`错误的问题

### 1.0.3

`2020年4月2日`

- **Feature**
  - 🌟 增加自定义 hooks-`useCountdown`
  - 🌟 增加自定义 hooks-`useDateCountdown`
- **Bug Fix**
  - 🐞 修复生产模式没有去掉 console 的问题
- **Build**
  - 🛠 统一修改资源路径为 s.hnzycfc.com
- **Others**
  - 📝 将`package-lock.json`从 ignore 中去掉了
  - 📝 去掉了 Sass 支持，如果需要在项目中使用，可以查看 README 中的配置
  - 📝 精简 ESLint 配置
  - 📝 规范文件命名

### 1.0.2

`2020年3月20日`

- **Feature**
  - 🌟 增加懒加载测试模块
- **Bug Fix**
  - 🐞`less-loader`增加`javascriptEnabled: true`配置，避免出现问题

### 1.0.1

`2020年3月5日`

- **Build**
  - 🛠 修改 webpack 打包 js 文件名为 vendors
