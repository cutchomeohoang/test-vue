import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/HomeComponent'
import NotiesComponent from './components/NotiesComponent'
import ProfileComponent from './components/ProfileComponent'


Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: '/home', component:  HomeComponent},
        { path: '/profile', component:  ProfileComponent},
        { path: '/noties', component:  NotiesComponent},
    ],
    mode: 'history'
})
    