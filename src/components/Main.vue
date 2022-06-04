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
import mainHeader from "./Header.vue"
import HeroComponent from './main/HeroComponent.vue';
import AboutUs from './main/AboutUs.vue';
import Portfolio from './main/Portfolio.vue';
import Project from './main/Project.vue';
import Gallery from './main/Gallery.vue';
import Contact from './main/Contact.vue';
import Footer from './Footer.vue';
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
}
</script>