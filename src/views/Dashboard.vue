<template>
    <VContainer>
        Dashboard <br>
        
        <h1 color="primary">Leandro Oliveira</h1>
        <pre>{{ user }}</pre>

    </VContainer>
</template>
  
<script setup>
import { useMe } from "@/store/me";
import { ref } from "vue";

const loading = ref(false)
const { user, can } = useMe();

</script>