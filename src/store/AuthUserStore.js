import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthUserStore = defineStore('AuthUserStore', () => {
    const user = ref({
        name: '',
        email: '',
        avatar: '',
        created_at: '',
    });

    const getAuthUser = async () => {
        await axios.get('/api/profile')
            .then((response) => {
                user.value = response.data.data;
            });
    };

    return { user, getAuthUser };
});