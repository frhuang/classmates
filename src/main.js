import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import store from './store'
import MyHeader from './uicomponents/Header'
import MyCell from './uicomponents/Cell'
import MyCallbackCell from './uicomponents/CallbackCell'
import MyRadio from './uicomponents/Radio'
import MySearch from './uicomponents/Search'
import MyCheckList from './uicomponents/Checklist'
import Loading from './components/Loading'
import MyBack from './components/Back'
import MyNavbar from './uicomponents/Navbar';
import MyNavItem from './uicomponents/NavItem';

Vue.component(MyHeader.name, MyHeader);
Vue.component(MyCell.name, MyCell);
Vue.component(MyCallbackCell.name, MyCallbackCell)
Vue.component(MyRadio.name, MyRadio);
Vue.component(MySearch.name, MySearch);
Vue.component(MyCheckList.name, MyCheckList);
Vue.component(Loading.name, Loading);
Vue.component(MyBack.name, MyBack);
Vue.component(MyNavbar.name, MyNavbar);
Vue.component(MyNavItem.name, MyNavItem);

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  base: __dirname,
  routes
})

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
});

Vue.http.interceptors.push((request, next) => {
  app.$children[0].isLoading = true;
  next((response) => {
    app.$children[0].isLoading = false;
    return response
  })
})

// let indexScrollTop = 0;
// router.beforeEach((route, redirect, next) => {
//   if (route.path !== '/') {
//     indexScrollTop = document.body.scrollTop;
//   }
//   document.title = route.meta.title || document.title;
//   next();
// });
//
// router.afterEach(route => {
//   if (route.path !== '/') {
//     document.body.scrollTop = 0;
//   } else {
//     Vue.nextTick(() => {
//       document.body.scrollTop = indexScrollTop;
//     });
//   }
// });
