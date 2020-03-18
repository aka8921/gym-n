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
            
            if(this.password.length > 0 ){
                this.$axios.post('http://localhost:8000/api/auth/token/login',{
                    username: this.username,
                    password: this.password
                })
                .then(response => {
                    console.log(response.data.auth_token)
                    localStorage.setItem('token', response.data.auth_token)
                    if(localStorage.getItem('token') !== null){
                        this.$emit('loggedin')
                        this.$router.push('/')
                    }
                    
                })
                .catch( error => {
                    console.log(error);
                })
            }
            else{
                alert('password is left blank');
            }
        }
    },
    created(){
        if(localStorage.getItem('token') !== null){
            this.$router.push('/');
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