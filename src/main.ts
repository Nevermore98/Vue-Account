import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
// 全局组件
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};

if (document.documentElement.clientWidth > 500) {
  // window.alert('请使用手机打开本页面，以保证浏览效果');
  const qrcode = document.createElement('img');
  qrcode.src = './qrcode.png';
  qrcode.style.position = 'fixed';
  qrcode.style.left = '50%';
  qrcode.style.top = '50%';
  qrcode.style.transform = 'translate(-50%,-50%)';
  qrcode.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  document.body.appendChild(qrcode);
}
