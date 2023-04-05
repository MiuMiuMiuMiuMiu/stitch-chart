import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage'
import CodePage from '../views/CodePage'
import AsciiPage from '../views/AsciiPage'

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
    { 
        path: '/ascii', 
        name: 'Ascii',
        component: AsciiPage 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
