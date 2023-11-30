<template>
    <VContainer>
        Dashboard <br>
        
        <h1 color="primary">Leandro Oliveira</h1>
        
        <v-btn @click="logout" color="error" variant="outlined"><v-icon icon="mdi-logout" />
            Sair
        </v-btn>
    </VContainer>
</template>
  
<script setup>
import { useAuth } from '../store/auth';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuth();

function logout() {
    authStore.logout().then(() => {
        router.push({
            name: 'login'
        });
    })
}

</script>