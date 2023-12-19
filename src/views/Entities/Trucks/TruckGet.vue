<template>
    <VContainer>
        <div class="d-flex justify-space-between mb-6">
            <h4 class="text-indigo">Lista de veículos</h4> 
            <v-card-title>
                <v-dialog width="300px">
                    <template #activator="{ props }">
                        <v-btn v-bind="props" flat color="primary" prepend-icon="mdi-plus" size="small">Veículo</v-btn>
                    </template>                            
                    <truckForm />

                </v-dialog>
            </v-card-title>
        </div>        
        
        
    </VContainer>
</template>
  
<script setup>
import truckForm from "@/components/Forms/truckForm.vue";
import { useMe } from "@/store/me";
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { useTruck } from "@/store/truck";
const truckStore = useTruck();

const loading = ref(false)
const { user, can } = useMe();

const trucks = ref([]);

const tenant = ref('');
const error = ref(null);

onMounted(() => {
    trucks.value = truckStore.getTrucks()
});


</script>