import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import { Header,
  Cell,
  Button,
  Search,
  Tabbar,
  TabItem,
  Radio,
  Loadmore,
  TabContainer,
  TabContainerItem,
  Actionsheet } from 'mint-ui';
import store from './store'
import MyCell from './uicomponents/Cell'
import MyCallbackCell from './uicomponents/CallbackCell'
import PreRadio from './uicomponents/Radio'
import PreSearch from './uicomponents/Search'
import MyCheckList from './uicomponents/Checklist'
import Loading from './components/Loading'
import Back from './components/Back'

Vue.component(Header.name, Header);
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Radio.name, Radio);
Vue.component(Loadmore.name, Loadmore);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Actionsheet .name, Actionsheet);

Vue.component(MyCell.name, MyCell);
Vue.component(MyCallbackCell.name, MyCallbackCell)
Vue.component(PreRadio.name, PreRadio);
Vue.component(PreSearch.name, PreSearch);
Vue.component(MyCheckList.name, MyCheckList);
Vue.component(Loading.name, Loading);
Vue.component(Back.name, Back);

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
