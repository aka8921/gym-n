import Vue from 'vue';
import VueRouter from 'vue-router';

//importing views

import mainComponent from '../views/mainComponent.vue'
import home from '../views/home'
import member from '../views/member'
import addMember from '../views/addMember'
import editMember from '../views/editMember'


Vue.use(VueRouter)

const routes = [
  {
      path:'',
      component: mainComponent,
      children : [
        {
          path:'',
          name:'home',
          component: home,
        },
        {
          path:'/member',
          name:'member',
          component: member,
        },
        {
          path:'/add-member',
          name:'addMember',
          component: addMember,
        }
        ,
        {
          path:'/edit-member',
          name:'Edit Member',
          component: editMember,
        }
      ],
      meta:{
        requireAuth:true
      }
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login')
  },
  {
    path:'*',
    name:'404',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  



router.beforeEach((to,from,next) =>{
  if( to.matched.some( record => record.meta.requireAuth )){
    if( localStorage.getItem('token') === null ){
      next( /*{path:'/login'}*/ );
    }
    else{
      next();
    }
  }
  else{
    next();
  }
})




export default router