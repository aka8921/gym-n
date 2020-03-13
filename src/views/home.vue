<template>
    <div class="bg">
    <v-container >
         <v-row class="d-flex">
           
           
        
          
          <v-col
          cols="12"
          md="4" sm="6" lg="4"
          v-for="i in 12"
          :key="i"
          >



          
          <!--card starts from here-->

          <v-hover v-slot:default="{ hover }">
          <router-link to="/member" class="url">
          <v-card
          class="mx-auto pa-5"
          max-width="344"
          outlined
          :elevation="hover ? 16 : 2"
          dark
          
          >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline ">Name</v-list-item-title>
                  <v-list-item-subtitle>address</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar size="60" color="grey">
                  <img src="http://daflow.in/img/teams/Neeraj_unnikrishnan.jpg" />
                </v-list-item-avatar>
              </v-list-item>
              <v-card-text>
                Phone No.
                <span class="red--text">8954125412</span>
              </v-card-text>
              
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
    name:"home"

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