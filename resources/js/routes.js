import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'
import ProductCreate from './components/ProductCreate.vue'
import EditProduct from './components/ProductEdit.vue'
const routes=[
    {
        path:'/',
        component:Home,
        meta:{
            requiresAuth:true
        }
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
     },
     {
         name:'product.edit',
         path:'/product/update/:id',
         component:EditProduct,
         meta:{
             requiresAuth:true
         }
     },
     {
         path:'/product/create',
         component:ProductCreate,
         meta:{
             requiresAuth:true
         }
     }
]
export default new VueRouter({
    mode:'history',
    routes
})