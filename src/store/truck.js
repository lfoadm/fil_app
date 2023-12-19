import { defineStore } from "pinia";
import axios from "axios";
import { ref } from 'vue';

export const useTruck = defineStore('trucks', {
    state: () => ({
        trucks: ref([]),
      }),

    actions: {
        async getTrucks() {
            axios.get('/api/trucks').then((response) => {
                // console.log(response.data);
                this.trucks = response.data
            })
        },

        addTruckStore(plate) {
            return axios.post('api/truck', {  plate: plate })
        },
        
    }

    
});