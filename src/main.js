import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainComponent from "./pages/index.vue"
import AbountComponent from "./pages/abount.vue"
import  CalComponent from "./pages/calculator.vue"
import  CssDevComponent from "./pages/cssdev.vue"
import  CssDev2Component from "./pages/cssdev2.vue"
import  CssDev3Component from "./pages/cssdev3.vue"

const routes = [
  { path: '/', component: MainComponent },
  { path: '/about', component: AbountComponent },
  { path: '/calculator', component: CalComponent },
  { path: '/cssdev', component: CssDevComponent },
  { path: '/cssdev2', component: CssDev2Component },
  { path: '/cssdev3', component: CssDev3Component },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app")
