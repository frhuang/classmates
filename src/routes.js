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
import LookTa from './pages/LookTa';
import Complaints from './pages/Complaints';
import Money from './pages/my/money';
import Contacts from './pages/my/contacts';
import Records from './pages/my/records';
import About from './pages/my/about';
import MyInfo from './pages/my/myinfo';

const routes = [
  {
    path: '/',
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
    path: '/filter/nativeplace2/:id/:name',
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
    path: '/personalinfo/:id/lookta',
    component: LookTa
  },
  {
    path: '/personalinfo/:id/complaints',
    component: Complaints
  },
  {
    path: '/my',
    component: MyPage
  },
  {
    path: '/my/money',
    component: Money
  },
  {
    path: '/my/contacts',
    component: Contacts
  },
  {
    path: '/my/records',
    component: Records
  },
  {
    path: '/my/about',
    component: About
  },
  {
    path: '/my/myinfo',
    component: MyInfo
  }

]

export default routes;
