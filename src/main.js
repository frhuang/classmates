import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import store from './store'

import { Tabbar, TabItem, TabContainer, TabContainerItem, Search, Loadmore, Popup } from 'mint-ui';

import MyHeader from './uicomponents/Header'
import MyCell from './uicomponents/Cell'
import MyRadio from './uicomponents/Radio'
import MySearch from './uicomponents/Search'
import MyCheckList from './uicomponents/Checklist'
import Loading from './components/Loading'
import MyBack from './components/Back'
import MyNavbar from './uicomponents/Navbar';
import MyNavItem from './uicomponents/NavItem';
import MyButton from './uicomponents/Button';
import MyActionsheet from './uicomponents/actionsheet';

//mint-ui
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Search.name, Search);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Popup.name, Popup);

//my-ui
Vue.component(MyHeader.name, MyHeader);
Vue.component(MyCell.name, MyCell);
Vue.component(MyRadio.name, MyRadio);
Vue.component(MySearch.name, MySearch);
Vue.component(MyCheckList.name, MyCheckList);
Vue.component(Loading.name, Loading);
Vue.component(MyBack.name, MyBack);
Vue.component(MyNavbar.name, MyNavbar);
Vue.component(MyNavItem.name, MyNavItem);
Vue.component(MyButton.name, MyButton);
Vue.component(MyActionsheet.name, MyActionsheet);

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

Vue.http.options.emulateJSON = true
Vue.http.interceptors.push((request, next) => {
  app.$children[0].isLoading = true;
  next((response) => {
    app.$children[0].isLoading = false;
    return response
  })
})

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});
