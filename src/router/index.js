import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage'
import CodePage from '../views/CodePage'

const routes = [
    { 
        path: '/', 
        name: 'Home',
        component: HomePage 
    },
    { 
        path: '/code', 
        name: 'Code',
        component: CodePage 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
