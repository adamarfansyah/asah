import MainLayout from '@layouts/MainLayout';
import DetailNews from '@pages/DetailNews';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';
import CreateEmployee from '@pages/CreateEmployee';
import Category from '@pages/Category';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/detail/:newsId',
    name: 'DetailNews',
    protected: false,
    component: DetailNews,
    layout: MainLayout,
  },
  {
    path: '/category/:categoryName',
    name: 'Category',
    protected: false,
    component: Category,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: true,
    component: CreateEmployee,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
