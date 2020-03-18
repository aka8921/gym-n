<template>
    <v-content class=" d-flex flex-column justify-start main py-8">
        <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="7" class="mx-auto">
            <v-row justify="center">
                <h1 class="display-4 purple--text ma-5">Edit Member</h1>
            </v-row>
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
            <span class="overline">Name</span>
            <v-text-field label="Name" solo v-model="data.name"></v-text-field>
            <span class="overline">Address</span>
            <v-text-field label="Address" solo v-model="data.address"></v-text-field>
            <span class="overline">Age</span>
            <v-text-field label="Age" solo v-model="data.age"></v-text-field>
            <span class="overline">Height</span>
            <v-text-field label="Height" solo v-model="data.height"></v-text-field>
            <span class="overline">Weight</span>
            <v-text-field label="Weight" solo v-model="data.weight"></v-text-field>
            <span class="overline">Phone</span>
            <v-text-field label="Phone Number" solo v-model="data.phone"></v-text-field>
            
            <!--<v-row justify="center">
                <h1 class="display-3">Date Of Birth</h1>
            </v-row>-->
            <div class="ma-5"></div>
        </v-col>
            <!--
              <v-row justify="center" >
                
                
                
                <v-col cols="12" xs="6" sm="6" md="7" lg="6" xl="6" class="mx-auto">
                <v-row justify="center">
                    <h1 class="display-1">Date Of joining</h1>
                  </v-row>
                  <div class="ma-5"></div>
                  <v-row justify="center">
                    <v-date-picker v-model="memberData.doj"  :landscape="$vuetify.breakpoint.smAndUp"></v-date-picker>
                  </v-row>
                </v-col>
            </v-row>
             -->
        <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="7" class="mx-auto">

            <div class="ma-10"></div>
            <v-row justify="center">
            <div class="ma-5">
                    <v-btn large color="primary" @click="editMember()">Submit</v-btn>
                    <span class="mx-3"></span>
                    <v-btn large color="error" @click="$router.go(-1)">Cancel</v-btn>
            </div>
            </v-row>
            <div class="ma-10"></div>
            </v-col>
    </v-content>
</template>

<script>
export default {
  name: "editMember",
  data() {
    return {
      data:{

      },
      EditableMemberData: {
        name: "",
        address: "",
        phone: "",
        age:"",
        height:"",
        weight:"",
        profilePhoto: null,
      },
      filename: null,
      previewImage: null
    };
  },


  methods: {
    loadImage(event) {
      this.data.photo = event;
      console.log(this.data);
    },


    // removeImage() {
      
    // },
    
    editMember() {


      // constructing a FormData object ..
      const editData = this.data;
      const formdata = new FormData();
      Object.keys(editData).forEach(key => {
        if(editData[key] !== null) formdata.append(key, editData[key]);
        console.log(editData[key]);
        });



      var tok = 'Token '+ localStorage.getItem('token')
      this.$axios({
                url: `http://localhost:8000/api/v1/members/${this.data.id}/`,
                headers:{
                  'Content-Type': 'multipart/form-data',
                  'Authorization' : tok,
                },
                method: 'PATCH',
                data: formdata,
                
                
            })
            .then( res => {
                console.log(res);
                this.$router.go(-1);
            })
            .catch(err => {
                console.log(err)
            })




    },
    
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
                this.data.photo = null;
            })
            .catch(err => {

                console.log(err.response.data)

            })
        }
    },
    beforeMount(){
        this.getDetails()
    }
  } 
</script>