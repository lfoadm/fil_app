<template>
    <VContainer>
        Lista de veículos <br>
        
        
            <v-list>
                <v-list-item v-for="(item, index) in trucks" :key="index" :value="index">
                    <v-list-item-title>
                        <v-icon :color="item.color" :icon="item.icon"></v-icon>
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        


    </VContainer>
</template>
  
<script setup>
import { useMe } from "@/store/me";
import { ref } from "vue";

const loading = ref(false)
const { user, can } = useMe();

const trucks = [
    {
        title: "Veículo A",
        icon: "mdi-email",
        color: "blue",
    },
    {
        title: "Veículo B",
        icon: "mdi-email",
        color: "green",
    },
    {
        title: "Veículo C",
        icon: "mdi-email",
        color: "red",
    },
    {
        title: "Veículo D",
        icon: "mdi-email",
        color: "yellow",
    },
    {
        title: "Veículo E",
        icon: "mdi-email",
        color: "purple",
    },
    {
        title: "Veículo F",
        icon: "mdi-email",
        color: "orange",
    },
]

</script>