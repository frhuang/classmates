import Home from './pages/Home'
import Filters from './pages/Filters'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/filter',
    component: Filters
  }
]

export default routes;
