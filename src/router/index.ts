import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Bill from '@/views/Bill.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';
import {
  Button,
  Tabbar,
  TabbarItem,
  Form,
  Field,
  Icon,
  NavBar,
  Cell,
  CellGroup,
  Popup,
  List,
  PullRefresh,
  DatetimePicker,
  NumberKeyboard,
  Dialog,
  Progress,
  Rate,
  Divider
} from 'vant';
import 'vant/lib/index.css'; // 全局引入样式

Vue.use(VueRouter);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(CellGroup);
Vue.use(Cell);
Vue.use(Popup);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(DatetimePicker);
Vue.use(NumberKeyboard);
Vue.use(Dialog);
Vue.use(Progress);
Vue.use(Rate);
Vue.use(Divider);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/bill'
  },
  {
    path: '/bill',
    component: Bill
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/labels/edit/:id',
    component: EditLabel
  },
  // path: '*' 以下的匹配不到，做404
  {
    path: '*',
    component: NotFound
  }

];

const router = new VueRouter({
  routes
});

export default router;
