<template>
    <div class="bg">
    <v-container >
         <v-row class="d-flex">
           
           
        
          
          <v-col
          cols="12"
          md="4" sm="6" lg="3"
          v-for="detail in details"
          :key="detail.phone"
          >



          
          <!--card starts from here-->

          <v-hover v-slot:default="{ hover }">
          <router-link :to="{ name: 'member', params: { id: detail.id }}">
          <v-card
          class="mx-auto pa-5"
          max-width="250"
          outlined
          :elevation="hover ? 16 : 2"
          dark
          
          >
              
              <div class="d-flex flex-column justify-center align-center">
                <v-avatar size="100" color="grey">
                  <img :src="detail.photo" />
                </v-avatar>
                <span class="headline pt-2">
                  {{detail.name}}
                </span>
                <span class="caption pt-2">
                  {{detail.phone}}
                </span>
                <span class="overline pt-2">
                  
                  <v-chip
                    class="ma-2"
                    color="green"
                    text-color="white"
                  >
                    
                      {{                  getDaysRemaining(detail.exp_date)                }}
                  
                  </v-chip>
                </span>
                
                <div class="pa-0 ma-0">
                <!--<span class="red--text title">#001</span>-->
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
    data(){
      return{
        details: [],
        next: '',
        prev: '',
      }
    },
    computed:{
      today: function(){
        return String((new Date()))
      }
    },
    methods:{
      getDaysRemaining(expDate){
          //console.log(expDate)
          var d = 'Days'; //days,months/years 
          var remainingDays = Math.round(((  new Date(expDate).getTime()  ) - (new Date().getTime())) / (1000 * 3600 * 24));
          if(remainingDays < 0){
            remainingDays = 0;
          }
          else if( remainingDays > 30 && remainingDays < 365){
            remainingDays /= 30;
            d = 'Months'
          }
          else if(remainingDays > 365){
            remainingDays /= 365
            d = 'Years'
          }
          remainingDays = (d === 'Years')? remainingDays.toFixed(2) : Math.round(remainingDays)
          return (remainingDays+' '+d);
      },
      getlist(){
        console.log('running');
           var tok = `Token ${localStorage.getItem('token')}`
           console.log(tok)
           console.log(typeof(tok))

           // axios data
           /*var authOptions = {
               method: 'POST',
               url: 'http://localhost:8000/api/v1/members/',
               data: {},
               headers: {
                   'Authorization' : tok,
               }
           }*/
           
          this.$axios.get(/*authOptions*/'http://localhost:8000/api/v1/members/',{
            headers:{
              'authorization' : tok,
            }
          })
          .then(response => {
              console.log('response')
              console.log(response.data)
              this.details = response.data.results;
          })
          .catch( error => {
            console.log('error')
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