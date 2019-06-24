import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

import { Header ,Swipe, SwipeItem,Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// import HomeberContainer from './components/tabbar/HomeberContainer.vue'
// import MemberContainer from './components/tabbar/MemberContainer.vue'
// import SearchContainer from './components/tabbar/SearchContainer.vue'
// import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

// const router=new VueRouter({
//   routes:[
//     {path:"/home",component:HomeberContainer},
//     {path:"/member",component:MemberContainer},
//     {path:"/search",component:SearchContainer},
//     {path:"/shopcar",component:ShopcarContainer},
//   ]
// })

import router from './router.js'

import axios from 'axios';
Vue.prototype.$ajax = axios
axios.defaults.baseURL = 'http://192.168.0.107:3000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import moment from 'moment'

Vue.filter("dateFormat",function(data,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(data).format(pattern)
})




new Vue({
  el: '#app',
  render: h => h(App),
  router
})
