import Vue from 'vue'
import Router from 'vue-router'
import IndexNav from './view/IndexNav.vue'
import VenuePage from './view/VenuePage.vue'
import UserLogin from './view/UserLogin.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path: "/", component: UserLogin},
    {path: "/home", component: IndexNav,children:[
      {path: "", component: VenuePage},
      {path: "VenuePage", component: VenuePage},
      {path: "ActivePage", component: ()=>import("./view/ActivePage.vue")},
      {path: "FindPage", component: ()=>import("./view/FindPage.vue")},
      {path: "UserPage", component: ()=>import("./view/UserPage.vue")},
      {path: "SearchPage",name:"SearchPage", component: ()=>import("./view/SearchPage.vue")},
    ]},
    {path: "/DetailPage", name:"DetailPage",component: ()=>import("./view/DetailPage.vue")},
    {path: "/VenueOrder", name:"VenueOrder",component: ()=>import("./view/VenueOrder.vue")},
    {path: "/UserRegister", name:"UserRegister",component: ()=>import("./view/UserRegister.vue")},
  ]
})
