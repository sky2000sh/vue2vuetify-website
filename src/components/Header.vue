<template>
    <v-app-bar style="padding: 0px 90px"
    app
    color="white"
    light
    elevation="6"
    elevate-on-scroll
    >
        <v-toolbar-title class="toolTitle">ImTraveler</v-toolbar-title>

        <v-spacer />

        <v-list class="d-flex align-center">
            <v-list-item link v-for="(menu, index) in menus" :key="index" :to="menu.route">
                <v-list-item-title>{{menu.title}}</v-list-item-title>
            </v-list-item>

            <v-btn text>
                <v-icon> mdi-magnify </v-icon>
            </v-btn>
            <v-btn outlined color="success"> Get Started </v-btn>
        </v-list>
    </v-app-bar>
</template>

<script>
    export default {
        name: "mainHeader",
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
        
    }
</script>

<style>
.toolTitle {
    font-size: 32px;
    font-weight: bold;
    font-family: sans-serif;
    color: #4caf50
}
</style>