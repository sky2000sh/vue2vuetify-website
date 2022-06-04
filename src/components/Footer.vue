<template>
    <v-footer padless>
        <v-col lg="12">
            <v-row justify="center">
                <v-col lg="4" class="text-center">
                    <v-toolbar-title class="toolTitle">ImTraveler</v-toolbar-title>

                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
                            <v-icon size="24px"> {{ icon }} </v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-subheader>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        oluptatem aspernatur repellat aliquid, culpa dolor illum ipsa reiciendis nulla eveniet aliquam!
                    </v-subheader>
                    <v-form class="mt-4">
                        <v-text-field label="Email" outlined dense/>
                        <v-btn rounded color="success">Subscribe Us</v-btn>
                    </v-form>
                </v-col>                
            </v-row>
            <div class="mt-10">
                <v-divider></v-divider>
                <v-subheader>
                    ⓒ Copyright ImTraveler. All Rights Reserved {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                    <v-spacer/>
                    <strong>Designed by ImTraveler</strong>
                </v-subheader>
            </div>
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Footer",
        data() {
            return {
                icons: [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
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