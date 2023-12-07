<template>
    <v-container grid-list-xs>
        <v-text-field v-model="email" />
        <v-text-field v-model="password" />
        <v-btn color="primary" class="my-2 mx-4" @click="login">login</v-btn>
        <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
            Novo aqui?
            <RouterLink :to="{ name: 'register' }"
                class="text-red-lighten-2 text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                <h4>Crie sua conta</h4>
            </RouterLink>
        </h6>
    </v-container>    
</template>

<script setup>
import { useAuth } from '@/store/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';

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