<template>
  <v-app>
    <mainHeader/>
    
    <v-main>
      <HeroComponent/>
      <AboutUs/>
      <Portfolio/>
      <Project/>
      <Gallery/>
      <Contact/>
      <Footer/>

    </v-main>

    <router-view></router-view>
  </v-app>
</template>

<script>
import mainHeader from "./components/Header.vue"
import HeroComponent from './components/main/HeroComponent.vue';
import AboutUs from './components/main/AboutUs.vue';
import Portfolio from './components/main/Portfolio.vue';
import Project from './components/main/Project.vue';
import Gallery from './components/main/Gallery.vue';
import Contact from './components/main/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    mainHeader,
    HeroComponent,
    AboutUs,
    Portfolio,
    Project,
    Gallery,
    Contact,
    Footer
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
