import Home from './pages/Home';
import Filters from './pages/Filters';
import NativePlace from './pages/filter/NativePlace';
import NativePlace2 from './pages/filter/NativePlace2';
import School from './pages/filter/School';
import Profession from './pages/filter/Profession';
import StartYear from './pages/filter/StartYear';
import Interest from './pages/filter/Interest';
import PersonalInfo from './pages/PersonalInfo';
import MyPage from './pages/MyPage';
import LookTa from './pages/LookTa';
import Complaints from './pages/Complaints';
import Money from './pages/my/Money';
import Contacts from './pages/my/Contacts';
import Records from './pages/my/Records';
import About from './pages/my/About';
import MyInfo from './pages/my/MyInfo';
import MyName from './pages/my/MyName';
import MyQrcode from './pages/my/MyQrcode';
import MyStdCard from './pages/my/MyStdCard';
import Album from './components/Album';
import NoFound from './components/NoFound';
import MyInterests from './pages/my/MyInterests'

const routes = [
  {
    path: '/',
    component: require('./pages/Home.vue')
  },
  {
    path: '/filter',
    component: Filters
  },
  {
    path: '/filter/nativeplace/:id',
    component: NativePlace
  },
  {
    path: '/filter/nativeplace2/:id/:proId/:name',
    component: NativePlace2
  },
  {
    path: '/filter/school/:id',
    component: School
  },
  {
    path: '/filter/profession/:id',
    component: Profession
  },
  {
    path: '/filter/startYear/:id',
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
  },
  {
    path: '/my/myinfo/myname/:id',
    component: MyName
  },
  {
    path: '/my/myinfo/album',
    component: Album
  },
  {
    path: '/my/myinfo/qrcode',
    component: MyQrcode
  },
  {
    path: '/my/myinfo/stdcard',
    component: MyStdCard
  },
  {
    path: '/my/myinfo/myinterests',
    component: MyInterests
  }
]

export default routes;
