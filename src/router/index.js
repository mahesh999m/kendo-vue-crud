import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddProduct from '@/components/AddProduct'

Vue.use(Router)


export default new Router({
  routes: [{
      path: '/add-product',
      component: AddProduct
    },
    {
      path: '/',
      name: "home",
      component: Home
    }
  ]
})
