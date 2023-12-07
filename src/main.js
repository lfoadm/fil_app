// import App from './App.vue'
// import './axios';
// import { createApp } from 'vue'
// import { registerPlugins } from '@/plugins'
// import axios from 'axios'
// const app = createApp(App)
// registerPlugins(app)

// app.mount('#app')

// **** original end *****


import { loadFonts } from '@/plugins/webfontloader'
loadFonts()
import App from './App.vue'
import './axios'
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import pinia from '@/store';
import { useMe } from '@/store/me';
// import { useAuthUserStore } from '@/store/AuthUserStore';


const app = createApp(App)

app.use(pinia)
// const authUserStore = useAuthUserStore();
// authUserStore.getAuthUser();
const meStore = useMe();
meStore.getMe()
  .catch(() => {})
  .finally(() => {
    app.use(vuetify)
    app.use(router)
    app.mount('#app')
  })