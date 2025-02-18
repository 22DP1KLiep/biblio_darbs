<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <router-view />
    <Footer v-if="showNavbar" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    Navbar,
    Footer
  },
  setup() {
    const route = useRoute();

    // Hide navbar & footer on login page
    const showNavbar = computed(() => route.path !== "/login");
    

    return { showNavbar };
  }
};
</script>

<style>
/* Global styles */
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f6f5f7;
}
</style>
