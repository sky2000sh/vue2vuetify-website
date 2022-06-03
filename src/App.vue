<template>
  <v-app>
    <mainHeader/>
    
    <v-main>
      <HeroComponent/>
      <AboutUs/>
      <BusinessResult/>
    </v-main>
  </v-app>
</template>

<script>
import mainHeader from "./components/Header.vue"
import HeroComponent from './components/HeroComponent.vue';
import AboutUs from './components/AboutUs.vue';
import BusinessResult from './components/BusinessResult.vue';

export default {
  name: 'App',
  components: {
    mainHeader,
    HeroComponent,
    AboutUs,
    BusinessResult
  },

  data() {
    return {
      menus: [
        {title: 'Home', route: 'home'},
        {title: 'About us', route: 'about-us'},
        {title: 'Business result', route: 'business-result'},
        {title: 'Project', route: 'project'},
        {title: 'Gallery', route: 'gallery'},
        {title: 'Contact', route: 'contact'},
      ]
      
      
    }
  }
};
</script>
