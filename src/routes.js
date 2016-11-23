import Home from './pages/Home';
import Filters from './pages/Filters';
import NativePlace from './pages/NativePlace';
import NativePlace2 from './pages/NativePlace2';
import School from './pages/School';
import Profession from './pages/Profession';
import StartYear from './pages/StartYear';
import Interest from './pages/Interest';
import PersonalInfo from './pages/PersonalInfo';
import MyPage from './pages/MyPage';

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
    path: '/filter/nativeplace',
    component: NativePlace
  },
  {
    path: '/filter/nativeplace2/:id',
    component: NativePlace2
  },
  {
    path: '/filter/school',
    component: School
  },
  {
    path: '/filter/profession',
    component: Profession
  },
  {
    path: '/filter/startYear',
    component: StartYear
  },
  {
    path: '/filter/interest',
    component: Interest
  },
  {
    path: '/personalinfo/:id',
    component: PersonalInfo
  },
  {
    path: '/my',
    component: MyPage
  }
]

export default routes;
