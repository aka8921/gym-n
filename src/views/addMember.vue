<template>
    <v-content class=" d-flex flex-column justify-start main py-8">
        <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="7" class="mx-auto">
          <v-row justify="center">
                    <h1 class="display-4 purple--text ma-5">Add Member</h1>
                  </v-row>
            <!--
              <v-row justify="center">
                <v-avatar size="250" color="grey" class="mb-5">
                <v-img src="http://daflow.in/img/teams/Neeraj_unnikrishnan.jpg"></v-img>
                </v-avatar>
            </v-row>
            -->
            <v-row justify="center">
                <div class="text-center">
                <v-file-input
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Select a profile photo"
                    prepend-icon="fas fa-camera"
                    @change="loadImage($event)"
                    dense
                    solo
                ></v-file-input>
                </div>
            </v-row>
            <div class="ma-5"></div>
            <v-text-field label="Name" solo v-model="memberData.name"></v-text-field>
            <v-text-field label="Address" solo v-model="memberData.address"></v-text-field>
            <v-text-field label="Age" solo v-model="memberData.age"></v-text-field>
            <v-text-field label="Height" solo v-model="memberData.height"></v-text-field>
            <v-text-field label="Weight" solo v-model="memberData.weight"></v-text-field>
            <v-text-field label="Phone Number" solo v-model="memberData.phone"></v-text-field>
            
            <!--<v-row justify="center">
                <h1 class="display-3">Date Of Birth</h1>
            </v-row>-->
            <div class="ma-5"></div>
        </v-col>
            <v-row justify="center" >
                
                
                <v-col cols="12" xs="6" sm="6" md="7" lg="6" xl="6" class="mx-auto">
                <v-row justify="center">
                    <h1 class="display-1">Date Of joining</h1>
                  </v-row>
                  <div class="ma-5"></div>
                  <v-row justify="center">
                    <v-date-picker v-model="memberData.date_joined"  :landscape="$vuetify.breakpoint.smAndUp"></v-date-picker>
                  </v-row>
                </v-col>
            </v-row>
        <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="7" class="mx-auto">

            <div class="ma-10"></div>
            <v-row justify="center">
                <v-btn class="blue white--text" @click="addMember()">Submit</v-btn>
            </v-row>
            <div class="ma-10"></div>
            </v-col>
    </v-content>
</template>

<script>
export default {
  name: "addMember",
  data() {
    return {
      memberData: {
        name: "vighnesh",
        address: "karuna, morakkunnu, chirakkara",
        phone: "8921830451",
        age:20,
        height:5,
        weight:56,
        photo: null,
        date_joined: new Date().toISOString().substr(0, 10),
        exp_date: new Date().toISOString().substr(0, 10),
        payment_status: true,
      },
      filename: null,
      previewImage: null
    };
  },
  methods: {
    loadImage(event) {
      this.memberData.photo = event;
      console.log(this.memberData);
    },

    
    removeImage() {
      this.memberData.profilePhoto = null;
    },
    addMember() {
      
      // constructing a FormData object ..
      const data = this.memberData;
      const formdata = new FormData();
      Object.keys(data).forEach(key => {
        formdata.append(key, data[key]);
        });



      var tok = `Token ${localStorage.getItem('token')}`
      
      this.$axios({
        url: "http://localhost:8000/api/v1/members/",
        headers:{
              'Content-Type': 'multipart/form-data',
              'Authorization' : tok,
              },
          method: "POST",
        data: formdata,
        
      })
        .then(res => {
          console.log (res)
          this.$router.go(-1)
        })
        .catch(err => {
          console.log(err)
        });
        
    }
  } 
};
</script>