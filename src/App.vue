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
  </v-app>
</template>

<script>
import mainHeader from "./components/Header.vue"
import HeroComponent from './components/HeroComponent.vue';
import AboutUs from './components/AboutUs.vue';
import Portfolio from './components/Portfolio.vue';
import Project from './components/Project.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';
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
