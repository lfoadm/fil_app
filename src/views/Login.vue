<template>
    <v-container grid-list-xs>
        <v-text-field v-model="email" />
        <v-text-field v-model="password" />
        <v-btn color="primary" class="my-2 mx-4" @click="login">login</v-btn>
    </v-container>    
</template>

<script setup>
import { useAuth } from '@/store/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuth();
const email = ref('lfoadm@icloud.com');
const password = ref('password');
  
function login() {
    authStore.login(email.value, password.value).then(() => {
        router.push({ name: 'dashboard' });
    })
}

</script>