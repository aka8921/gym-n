<template>
    <div class="bg">
    <v-container >
         <v-row class="d-flex">
           
           
        
          
          <v-col
          cols="12"
          md="4" sm="6" lg="3"
          v-for="i in 12"
          :key="i"
          >



          
          <!--card starts from here-->

          <v-hover v-slot:default="{ hover }">
          <router-link to="/member" class="url">
          <v-card
          class="mx-auto pa-5"
          max-width="250"
          outlined
          :elevation="hover ? 16 : 2"
          dark
          
          >
              
              <div class="d-flex flex-column justify-center align-center">
                <v-avatar size="100" color="grey">
                  <img src="http://daflow.in/img/teams/Neeraj_unnikrishnan.jpg" />
                </v-avatar>
                <span class="headline pt-2">
                  Vighnesh S
                </span>
                <span class="caption pt-2">
                  8921830451
                </span>
                <span class="overline pt-2">
                  
                  <v-chip
                    class="ma-2"
                    color="green"
                    text-color="white"
                  >
                    <v-avatar
                      left
                      class="green darken-4"
                    >
                      3
                    </v-avatar>
                    days
                  </v-chip>
                </span>
                <div class="pa-0 ma-0">
                <span class="red--text title">#001</span>
              </div>
              </div>
              
        </v-card>
        </router-link>
        </v-hover>
        <!--card ends-->




        </v-col>


      </v-row> 


  </v-container>
  </div>
</template>

<script>
export default {
  
    name:"home",
    methods:{
      getlist(){
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
    },
    beforeMount(){
        this.getlist();
   }
}
</script>

<style scoped>
.url{
  text-decoration: none;
}
.bg{
  background-color: rgba(0,0,0,0.8);
}
</style>