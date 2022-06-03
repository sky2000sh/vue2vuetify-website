<template>
  <v-app>
    <mainHeader />
    
    <v-main>
      <hero-component />
    </v-main>
  </v-app>
</template>

<script>
import mainHeader from "./components/Header.vue"
import HeroComponent from './components/HeroComponent.vue';

export default {
  name: 'App',
  components: {
    mainHeader,
    HeroComponent
  },

  data() {
    return {
      menus: [
        {title: 'Home', route: 'home'},
        {title: 'About us', route: 'about-us'},
        {title: 'Portfolio', route: 'portfolio'},
        {title: 'Project', route: 'project'},
        {title: 'Gallery', route: 'gallery'},
        {title: 'Contact', route: 'contact'},
      ]
      
      
    }
  }
};
</script>
