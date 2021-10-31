import Vue from 'vue';
import VueRouter from 'vue-router';
import BlogList from '@/views/blog-list/index.vue';
import BlogPost from '@/views/blog-post/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list',
    component: BlogList,
  },
  {
    path: '/article/:id',
    name: 'article',
    component: BlogPost,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
