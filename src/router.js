import VueRouter from 'vue-router'


import HomeberContainer from './components/tabbar/HomeberContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

import BewsList from './components/news/BewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'

const router=new VueRouter({
    routes:[
      {path:"/home",component:HomeberContainer},
      {path:"/member",component:MemberContainer},
      {path:"/search",component:SearchContainer},
      {path:"/shopcar",component:ShopcarContainer},

      {path:"/newlist",component:BewsList},
      {path:"/newsinfo/:id",component:Newsinfo},
    ]
  })


  export default router