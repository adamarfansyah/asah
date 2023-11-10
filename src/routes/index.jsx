import MainLayout from '@layouts/MainLayout';
import DetailNews from '@pages/DetailNews';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';

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
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
