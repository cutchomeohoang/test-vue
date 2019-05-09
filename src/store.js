import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        posts: [],
        users: [],
    },
    getters: {

    },
    mutations: {
        getPosts(state, posts) {
            state.posts = posts
        },
        getUsers(state, users) {
            state.users = users
        },
    },
    actions: {
        getPosts({commit}) {
            axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
                 .then( (res) => {
                    console.log(res.data) 
                    commit('getPosts', res.data)
                 })
        },
        getUsers({commit}) {
            axios.get('https://reqres.in/api/users')
                 .then( (res) => {
                    console.log(res.data.data) 
                    commit('getUsers', res.data.data)
                 })
        }
    }
})