import './assets/main.css'

import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from "vue-router";
import App from './App.vue'
import RecipeView from "@/components/RecipeView.vue";

const routes = [
    { path: '/recipe/:recipe(.*)*', name: 'recipe',   component: RecipeView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp(App).use(router).mount('#app')