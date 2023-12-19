<template>
  <div>
    <v-navigation-drawer left elevation="0" app class="leftSidebar" v-model="sidebarDrawer">
      <div class="pa-5">
        <Logo />
      </div>
      <div>
        <!-- <perfect-scrollbar class="scrollnavbar"> -->
        <v-list class="pa-6">
          <v-list-subheader color="darkText"
            class="smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold">MENU {{ user.first_name }}</v-list-subheader> 

          <v-list-item :to="{ name: 'dashboard' }" rounded="xl" class="mb-1" color="primary">
            <template v-slot:prepend>
              <v-icon icon="mdi-view-dashboard" color="primary" />
            </template>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'trucks' }" rounded="xl" class="mb-1" color="primary">
            <template v-slot:prepend>
              <v-icon icon="mdi-truck" color="primary" />
            </template>
            <v-list-item-title>Veículos</v-list-item-title>
          </v-list-item>

        </v-list>

        <div class="pa-4">
          <!-- <ExtraBox /> -->
        </div>
        <!-- </perfect-scrollbar> -->
      </div>
    </v-navigation-drawer>

    <v-app-bar elevation="0" height="70" class="bg-brown-lighten-4">
      <div class="d-flex align-center justify-space-between w-100">
        <div>
          <v-btn class="ms-md-3 ms-sm-5 ms-3 text-muted" @click="sidebarDrawer = !sidebarDrawer" icon
            variant="flat" size="small">
            <v-icon :icon="sidebarDrawer ? 'mdi-chevron-left' : 'mdi-menu'" />
          </v-btn>
        </div>
        <div v-if="!sidebarDrawer" class="mx-10">
          <Logo />
        </div>
        <v-spacer></v-spacer>
        <div class="profileBtn custom-hover-primary">
          Olá, <strong>{{ user.first_name }}</strong>
        </div>

        <div>
          <UserDropdown />
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/components/logo/Logo.vue";
import UserDropdown from "../UserDropdown.vue";
import { useMe } from "@/store/me";

const { user, can } = useMe();
const sidebarDrawer = ref(false);

</script>