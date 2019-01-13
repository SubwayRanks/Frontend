import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const homeComponent = () => import('./components/home').then(({ HomeComponent }) => HomeComponent);
const searchComponent = () => import('./components/search').then(({ SearchComponent }) => SearchComponent);
const notFoundComponent = () => import('./components/404').then(({ NotFoundComponent }) => NotFoundComponent);
const profileComponent = () => import('./components/profile').then(({ ProfileComponent }) => ProfileComponent);
const accountComponent = () => import('./components/account').then(({ AccountComponent }) => AccountComponent);

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: homeComponent
  },
  {
    path: '/search',
    component: searchComponent
  },
  {
    path: '/profile/:id',
    component: profileComponent
  },
  {
    path: '/account',
    component: accountComponent
  },
  {
    path: '/*',
    component: notFoundComponent
  },
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
