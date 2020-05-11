module.exports = {
  extends: [
    // 大部分配置，比如env和parser等，都使用eslint-config-react-app中的配置
    // 因此其他配置都省略了
    'react-app',
    'airbnb-base',
    'airbnb/rules/react',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier', // 禁用与Prettier 冲突的规则
    'prettier/@typescript-eslint', // 针对添加的插件 弃用对应的格式化规则
    'prettier/react', // eslint-config-airbnb 启用 eslint-plugin-react 规则，故在prettier 修改
  ],
  globals: {
    // true表示允许被重写
    // false表示不允许被重写
    __SERVER_ENV__: false,
    __LOCAL__: false,
  },
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'ts', '.tsx'] },
    ],
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 1,
    'no-console': 0,
    'react/jsx-props-no-spreading': 1,
    // 下边两行规则原因是使用ts的可选调用语法，如`someFunction?.()`时，会报
    // ‘no-unused-expressions’错误
    'no-unused-expressions': [0, { extensions: ['.js', '.jsx'] }],
    '@typescript-eslint/no-unused-expressions': [
      0,
      { expressions: ['.ts', '.tsx'] },
    ],
  },
};
