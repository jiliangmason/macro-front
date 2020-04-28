/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:34:47
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-28 09:14:53
 */
import { loadMicroApp } from 'qiankun';
import { apps } from '../../config';

apps.forEach((item) => {
  const { name, entry } = item;
  loadMicroApp(
    { name, entry, container: '#react16' },
    {
      sandbox: {
        strictStyleIsolation: true,
      },
    },
  );
})
