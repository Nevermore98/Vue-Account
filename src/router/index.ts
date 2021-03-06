import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Bill from '@/views/Bill.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

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
