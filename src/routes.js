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
import MyName from './pages/my/my-name';
import MyQrcode from './pages/my/my-qrcode';
import MyStdCard from './pages/my/my-std-card';
import Album from './components/Album';
import NoFound from './components/NoFound';
import MyInterests from './pages/my/my-interests'

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
