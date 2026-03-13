import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import StepView from '@/views/StepView.vue'
import ThanksView from '@/views/ThanksView.vue'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: WelcomeView
    },
    {
        path: '/step',
        name: 'step',
        component: StepView
    },

    {   
        path: '/thanks',
        name: 'thanks',
        component: ThanksView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router