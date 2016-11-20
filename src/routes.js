import Home from './pages/Home';
import Filters from './pages/Filters';
import NativePlace from './pages/NativePlace'

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
  },
  {
    path: '/nativeplace',
    component: NativePlace
  }
]

export default routes;
