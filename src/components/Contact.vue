<template>
    <v-container class="my-15">
        <v-row justify="center">
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h4 justify-center"> Contact </v-subheader>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fuga, aperiam ipsum eveniet ipsam eligendi doloribus voluptatum beatae neque cum,
                    laudantium facilis, autem dicta nulla libero quas in sunt quibusdam animi!</p>
            </v-col>
            <v-col lg="6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202408.1137750431!2d126.97408630000001!3d37.563856099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2zU8Opb3Vs!5e0!3m2!1sfr!2skr!4v1654320652654!5m2!1sfr!2skr"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
            <v-col lg="6">
                <v-form ref="form">
                    <v-text-field v-model="contactInfo.name" :counter="10" label="Name" required></v-text-field>
                    <v-text-field v-model="contactInfo.email" label="E-mail" required></v-text-field>
                    <v-textarea label="Message" v-model="contactInfo.message">

                    </v-textarea>
                    <v-btn color="success" class="mr-4"> Send </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Contact',
    data() {
        return {
            contactInfo: {
                name: '',
                email: '',
                message: '',
            }
        }
    }
}
</script>