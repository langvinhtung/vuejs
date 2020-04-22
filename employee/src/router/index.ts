import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import List from '../views/List.vue';
import AddDetail from '../views/AddDetail.vue';
import UpdateDetail from '../views/UpdateDetail.vue';
import Detail from '../views/Detail.vue';
import VueAxios from 'vue-axios';

Vue.use(VueRouter);
Vue.use(VueAxios);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/Add-Detail',
    name: 'Adddetail',
    component: AddDetail,
  },
  {
    path: '/Update-Detail/:id',
    name: 'Updatedetail',
    component: UpdateDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
