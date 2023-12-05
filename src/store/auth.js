import { defineStore } from 'pinia';
import axios from 'axios';
import { useMe } from './me';

export const useAuth = defineStore('auth', {
    state: () => ({}),

    actions: {
        sanctum() {
            return axios.get('sanctum/csrf-cookie');
        },

        login(email, password) {
            const meStore = useMe();
            return axios.post('api/login', { email, password })
            .then(response => {
                meStore.user = response.data.data
            })
            
        },

        register(name, email, password) {
            return axios.post('api/register', { 
                name: name,
                email: email,
                password: password,
            })
        },

        // verifyEmail(token) {
        //     return axios.post('api/verify-email', { 
        //         token
        //     })
        // },

        // forgotPassword(email) {
        //     return axios.post('api/forgot-password', {
        //         email
        //     })
        // },

        // resetPassword(token, password) {
        //     return axios.post('api/reset-password', {
        //         token, password
        //     })
        // },
                
        logout() {
            const meStore = useMe()
            return axios.post('api/logout').then(() => {
                meStore.user = null
            })
        }
    },

    getters: {
        isLoggedIn() {
            const meStore = useMe()
            return !!meStore.user
        }
    }
})