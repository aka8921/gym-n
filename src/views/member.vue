<template class>
    <div class=" d-flex flex-column justify-start align-center main py-8">
        <v-avatar size="300" color="grey" >
                  <img src="http://daflow.in/img/teams/Neeraj_unnikrishnan.jpg" />
        </v-avatar>

        <div class="ma-2"></div>
        
        <span class="display-4">
            Vighnesh S
        </span>

        <div class="ma-2"></div>

        <span class="headline">
            +91 8921830451
        </span>
        <div class="ma-2"></div>
        <span class="overline pt-2">
                  Expires in
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

                <div class="ma-3"></div>

                <div class="d-flex ma-5">
                    <v-card class="yellow black--text pa-10 d-flex flex-column align-center justify-center">
                        <span class="d-block overline">Renew For</span> 
                        <span class="d-block display-3">1</span> 
                        <span class="d-block overline">Month</span>
                    </v-card >
                    <div class="mx-3"></div>
                    <v-card class="blue  pa-10 d-flex flex-column align-center justify-center">
                        <span class="d-block overline">Renew For</span> 
                        <span class="d-block display-3">3</span> 
                        <span class="d-block overline">Months</span>
                    </v-card >
                </div>

                <v-simple-table class="table">
                    <template >
                    <thead >
                        <tr>
                        <th class="text-center">Parameter</th>
                        <th class="text-center">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 5" :key="i">
                        <td class="text-center">Weight</td>
                        <td class="text-center">56 Kg</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <div class="ma-5">
                    <v-btn large color="primary">Edit</v-btn>
                    <span class="mx-3"></span>
                    <v-btn large color="error">Delete</v-btn>
                </div>

    </div>
</template>

<script>
export default {
    name: "member"
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