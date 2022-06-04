<template>
    <v-container class="pt-15">
        <v-row>
            <v-col lg="6">
                <h2 class="intro-text">Welcome to ImTraveler</h2>
                <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fuga, aperiam ipsum eveniet ipsam eligendi doloribus voluptatum beatae neque cum,
                    laudantium facilis, autem dicta nulla libero quas in sunt quibusdam animi!</p>
                <v-btn color="success" class="white--text mr-10" rounded> Get Started </v-btn>
                <v-btn color="indigo" class="white--text" rounded>
                    <v-icon> mdi-play-circle </v-icon> Watch Video
                </v-btn>
            </v-col>
            <v-col lg="6">
                <img width="100%" src="../assets/hero-img.jpg" alt="hero-img">
            </v-col>
        </v-row>
    </v-container>    
</template>

<script>
    export default {
        name: "HeroComponent"
        
    }
</script>

<style scoped>
h2.intro-text {
    font-size: 60px;
    font-weight: bold;
    font-family: sans-serif;
    color: #444
}
p.description {
    font-size: 19px;
    font-family: sans-serif;
    margin: 32px 0px;
    color: #444444
}
</style>