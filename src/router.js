import Vue from 'vue'
import Router from 'vue-router'
import IndexNav from './view/IndexNav.vue'
import VenuePage from './view/VenuePage.vue'
import ActivePage from './view/ActivePage.vue'
import FindPage from './view/FindPage.vue'
import UserPage from './view/UserPage.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path: "/", component: IndexNav,children:[
      {path: "", component: VenuePage},
      {path: "VenuePage", component: VenuePage},
      {path: "ActivePage", component: ActivePage},
      {path: "VenuePage", component: VenuePage},
      {path: "FindPage", component: FindPage},
      {path: "UserPage", component: UserPage},
    ]},
    // {path: "/MenueDetails/:id", component: MenueDetails},
  ]
})
