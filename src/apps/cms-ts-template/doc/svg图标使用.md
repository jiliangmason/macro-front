# SVG 图标使用

## 开发 SVG 图标组件

结合 antd mobile 使用

### 1.首先安装`npm i svg-sprite-loader -D`，在 webpack 配置中增加

```js
{
  test: /\.svg$/,
  loader: 'svg-sprite-loader'
}
```

### 2.开发图标组件

```js
const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
  <svg
    className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
    {...restProps}
  >
    <use xlinkHref={`#${type.default.id}`} />
  </svg>
);
```

### 3.使用

```jsx
<CustomIcon type={require('./foo.svg')} />
```

## 另一种方式

### 1.一次性引入所有 svg 文件

```js
const importAll = requireContext =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('./icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
```

### 2.通过`use`使用

```jsx
import './importantIcons';

const Icon = props => {
  const { type, className, ...restProps } = props;
  return (
    <svg className={className} {...restProps}>
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};
```
