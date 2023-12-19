<template>
    <VContainer>
        <div class="text-center">
            <v-snackbar v-model="snackbar" :timeout="timeout" top="true" color="success">
            {{ text }}
            <template v-slot:actions>
                <v-btn color="white" variant="text" @click="snackbar = false">Fechar</v-btn>
            </template>
            </v-snackbar>
        </div>

        <div class="d-flex justify-space-between mb-6">
            <h4 class="items-center text-indigo ">Lista de veículos</h4> 
            <v-icon
            color="success"
            icon="mdi-refresh"
            size="x-large"
            @click="refresh"
            ></v-icon>
            
            <v-card-title>
                <truckForm  @truckAdded="snackbar = true" @push="push" />
            </v-card-title>
        </div>        
        <v-table density="compact">
            <thead>
                <tr>
                    <th class="text-left">Placa</th>
                    <th class="text-left">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in truckStore.trucks"
                    :key="item.id"
                >
                    <td>{{ item.plate }}</td>
                    <td>{{ item.tenant_id }}</td>
                </tr>
            </tbody>
        </v-table>
        
    </VContainer>
</template>
  
<script setup>
import truckForm from "@/components/Forms/truckForm.vue";
import { useMe } from "@/store/me";
import { ref, onMounted } from 'vue';

import { useTruck } from "@/store/truck";
const truckStore = useTruck();

const loading = ref(false)
const { user, can } = useMe();

const trucks = ref([]);
const tenant = ref('');
const error = ref(null);

const snackbar = ref(false);
const text = ref('Veículo adicionado com sucesso');
const timeout = ref(4000);

function refresh() {
    location.reload();
    console.log("atualizar")
}

onMounted(() => {
    trucks.value = truckStore.getTrucks()
});

function push() {
    // trucks.value.push(truckStore.getTrucks())
    trucks.value.unshift(truckStore.getTrucks())

}


</script>