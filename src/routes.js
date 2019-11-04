import Stocks from './components/Stocks.vue';
import Portfolio from './components/Portfolio.vue';
import Home from './components/Home.vue';

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/stocks',
    component: Stocks
  },
  {
    path: '/portfolio',
    component: Portfolio
  }
];

export default routes;
