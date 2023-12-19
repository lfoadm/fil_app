<template>
    <v-footer class="d-flex flex-column justify-center">
      <div class="bg-brown-lighten-4 w-100 align-center px-2 text-center">
        <strong>Redes</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </div>
  
      <div class="px-4 py-2 bg-grey-lighten-3 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Fil Agendamentos</strong>
      </div>
    </v-footer>
  </template>

  <script>
    export default {
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }),
    }
  </script>