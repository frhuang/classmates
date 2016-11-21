import Home from './pages/Home';
import Filters from './pages/Filters';
import NativePlace from './pages/NativePlace';
import School from './pages/School';
import Profession from './pages/Profession';
import StartYear from './pages/StartYear';
import Interest from './pages/Interest';

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
  },
  {
    path: '/school',
    component: School
  },
  {
    path: '/profession',
    component: Profession
  },
  {
    path: '/startyear',
    component: StartYear
  },
  {
    path: '/interest',
    component: Interest
  }
]

export default routes;
