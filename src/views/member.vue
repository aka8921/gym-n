<template class>
    <div class=" d-flex flex-column justify-start align-center main py-8">
        <v-avatar size="300" color="grey" >
                  <img :src="data.photo" />
        </v-avatar>

        <div class="ma-2"></div>
        
        <span class="display-4">
            {{data.name}}
        </span>

        <div class="ma-2"></div>

        <span class="headline">
            +91 {{data.phone}}
        </span>
        <div class="ma-2"></div>

        <span class="d-block overline">{{data.address}}</span> 
        <div class="ma-2"></div>
        <span class="overline pt-2">
                  Expires in
                  <v-chip
                    class="ma-2"
                    color="green"
                    text-color="white"
                  >
                   
                    
                        {{                  getDaysRemaining(data.exp_date)                }}


                  </v-chip>
                </span>

                <div class="ma-3"></div>

                <div class="d-flex ma-5">
                    <v-card class="yellow black--text pa-10 d-flex flex-column align-center justify-center" @click="renewMembership(1)">
                        <span class="d-block overline">Renew For</span> 
                        <span class="d-block display-3">1</span> 
                        <span class="d-block overline">Month</span>
                    </v-card >
                    <div class="mx-3"></div>
                    <v-card class="blue  pa-10 d-flex flex-column align-center justify-center" @click="renewMembership(3)">
                        <span class="d-block overline">Renew For</span> 
                        <span class="d-block display-3">3</span> 
                        <span class="d-block overline">Months</span>
                    </v-card >
                </div>


                <div class="ma-3"></div>

                <span class="display-3">Other Parameters</span>

                <div class="ma-3"></div>



                <v-simple-table class="table">
                    <template >
                    <thead >
                        <tr>
                        <th class="text-center">Parameter</th>
                        <th class="text-center">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="text-center">Weight</td>
                        <td class="text-center">{{data.weight}} Kg</td>
                        </tr>

                        <tr>
                        <td class="text-center">Height</td>
                        <td class="text-center">{{data.height}} m</td>
                        </tr>

                        <tr>
                        <td class="text-center">Date Joined</td>
                        <td class="text-center">{{data.date_joined}}</td>
                        </tr>

                        <tr>
                        <td class="text-center">Expires On</td>
                        <td class="text-center">{{data.exp_date}}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                

                <div class="ma-3"></div>

                <!--
                    
                    ------------ LOG ------------- 
                    
                    <span class="display-3">Log History</span>

                <div class="ma-3"></div>


                <v-simple-table class="table">
                    <template >
                    <thead >
                        <tr>
                        <th class="text-center">Renewed on</th>
                        <th class="text-center">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 5" :key="i">
                        <td class="text-center">Date</td>
                        <td class="text-center">3 months</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>-->


                <div class="ma-5">
                    <router-link :to="{ name: 'Edit Member', params: { id: data.id }}" class="url">
                    <v-btn large color="primary">Edit</v-btn>
                    </router-link>
                    <span class="mx-3"></span>
                    <v-btn large color="error" @click="deleteMember()">Delete</v-btn>
                </div>

    </div>
</template>

<script>
export default {
    name: "member",
    data(){
        return{
            data: {},
            log:'',
        }
    },
    methods:{
        deleteMember() {
        var tok = `Token ${localStorage.getItem('token')}`
      
      this.$axios({
        url: `http://localhost:8000/api/v1/members/${this.data.id}`,
        headers:{
              'Authorization' : tok,
              },
          method: "DELETE",
        
      })
        .then(res => {
          console.log(`Member deleted Successfully ${res}`);
          this.$router.go(-1);
        })
        .catch(err => {
          console.log(err)
        });
    },







        renewMembership(n){





            //testing area
            console.log(n);

            var startDate = new Date( this.data.exp_date);
            console.log(startDate)
            var endDateMoment = this.moment(startDate);
            (n >= 0) ? endDateMoment.add(n, 'months'): endDateMoment.subtract(n, 'months');
            var extendedDate = endDateMoment.format('YYYY-MM-DD');




            this.$axios({
                url: `http://localhost:8000/api/v1/members/${this.data.id}/`,
                method: 'PATCH',
                data:{
                    exp_date: extendedDate,
                    duration: n
                }
                
            })
            .then( res => {
                console.log(res)
                //console.log(this.data.exp_date);
                console.log('renewed for '+n+' months');
                this.getDetails();
            })
            .catch(err => {
                console.log(err)
            })
        },





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
          remainingDays = (d === 'Years')? remainingDays.toFixed(1) : Math.round(remainingDays)
          return (remainingDays+' '+d);
      },



    //  LOG Feature
    //   getLog(){
    //         console.log('fetching the details');
    //         var id = this.$route.params.id;
    //         var tok = 'Token '+localStorage.getItem('token');
    //          this.$axios(
    //       {
    //          url : `http://localhost:8000/api/v1/members/`,
    //          method : 'GET',
    //         params : {
    //         search : id
    //         },
    //         headers:{
    //           'Authorization' : tok,
    //           }
    //         })
    //         .then( res => {
    //             this.log = res.data ;
    //             //console.log(res.data)
    //             console.log('log History')
    //             console.log(this.log)
    //         })
    //         .catch(err => {
    //             console.log(err.response.data)

    //         })
    //     },
        getDetails(){
            console.log('fetching the details');
            var id = this.$route.params.id;
            var tok = 'Token '+localStorage.getItem('token');
            this.$axios.get(`http://localhost:8000/api/v1/members/${id}`,
            {
            headers:{
              'authorization' : tok,
            }
          })
            .then( res => {
                this.data = res.data ;
            })
            .catch(err => {
                console.log(err.response.data)

            })
        }
    },
    beforeMount(){
        this.getDetails()
        //this.getLog()
    }
}
</script>

<style scoped>
.main{
 min-height:100vh; 
}
.table{
    width: 80vw;
}

</style>