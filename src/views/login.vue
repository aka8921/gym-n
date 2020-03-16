<template>
    <div class="main d-flex align-center">
        <v-content class=" " >
            <v-container class="">
                <v-row align="center" justify="center" class="">

                    <v-col cols="12" lg="4" align-self="center">
                        <v-card ref="form" class="px-5 py-6" color="rgba(0, 0, 0, 1)" dark>
                            <div class="display-2 d-flex justify-center pa-5">
                                Login
                            </div>
                            <v-card-text>
                            <v-text-field
                                v-model="username"
                                type="username"
                                name="user"
                                label="Username"
                                solo
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                type="password"
                                label="Password"
                                solo
                                name="password"
                                @click:append="show1 = !show1"
                            ></v-text-field>
                            </v-card-text>
                            <div class="my-2 d-flex justify-center pb-5">
                                
                                <!--
                                    <router-link to="/">    
                                
                                    </router-link>
                                -->


                                <v-btn large color="primary" @click="loginHandle">GO</v-btn>
                            
                            </div> 
                        </v-card>
                    </v-col>

                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
export default {
    name:"login",
    data(){
        return{
            show1: false,
            username:'',
            password:'',
        }
    },
    methods: {
        loginHandle(){
            alert ("login handle called")//
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.main{
    height: 100vh;
    background-color: aqua;
    background-image: url('https://images.pexels.com/photos/2078062/pexels-photo-2078062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;   
}
</style>