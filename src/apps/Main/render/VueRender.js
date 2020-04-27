/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:33:17
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-23 14:33:18
 */
import Vue from 'vue/dist/vue.esm';

function vueRender({ appContent, loading }) {
  return new Vue({
    template: `
      <div id="subapp-container">
        <h4 v-if="loading" class="subapp-loading">Loading...</h4>
        <div id="#subapp-viewport"></div>
        <div v-html="appContent" />
      </div>
    `,
    el: '#subapp-container',
    data() {
      return {
        appContent,
        loading,
      };
    },
  });
}

let app = null;

export default function render({ appContent, loading }) {
  if (!app) {
    app = vueRender({ appContent, loading });
  } else {
    app.appContent = appContent;
    app.loading = loading;
  }
}
