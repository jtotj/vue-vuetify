import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter); //will must use


const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'Gridsystem',
        component: GridSystem
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router; //register at main.js