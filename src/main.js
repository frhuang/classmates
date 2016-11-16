import Vue from 'vue'
import App from './App'
import { Button, Cell } from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  base: __dirname,
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
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
