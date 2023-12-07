<template>
    <div class="capa">
        <RouterLink to="/">

            <v-img
            aspect-ratio="16/9"
            cover
            src="../../assets/images/img/capa.jpg"
            ></v-img>
        </RouterLink>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
