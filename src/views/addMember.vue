<template>
    <v-content class=" d-flex flex-column justify-start main py-8">
        <v-col cols="12" xs="7" sm="7" md="7" lg="7" xl="7" class="mx-auto">
            <v-row justify="center">
                <v-avatar size="250" color="grey" class="mb-5">
                <v-img src="http://daflow.in/img/teams/Neeraj_unnikrishnan.jpg"></v-img>
                </v-avatar>
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
                <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6" class="px-auto">
                  <v-row justify="center">
                    <h1 class="display-1">Date Of Birth</h1>
                  </v-row>
                  <div class="ma-5"></div>
                  <v-row justify="center">
                    <v-date-picker v-model="memberData.dob"  :landscape="$vuetify.breakpoint.smAndUp"></v-date-picker>
                  </v-row>
                </v-col>
                
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
        name: "",
        address: "",
        phone: "",
        age:"",
        height:"",
        weight:"",
        profilePhoto: null,
        dob: new Date().toISOString().substr(0, 10),
        doj: new Date().toISOString().substr(0, 10)
      },
      filename: null,
      previewImage: null
    };
  },
  methods: {
    loadImage(event) {
      console.log(event)
      this.memberData.profilePhoto = event;
    },
    removeImage() {
      this.memberData.profilePhoto = null;
    },
    addMember() {
      console.log(this.memberData);
      const data = this.memberData;
      // for deleting keys without data in the array
      //   for (let key in data) {
      //     if (!data[key]) {
      //       delete data[key];
      //     }
      //   }
      //constructing a FormData object ..
      const formdata = new FormData();
      Object.keys(data).forEach(key => {
        formdata.append(key, data[key]);
      });

      var tok = `Token ${localStorage.getItem('token')}`
      this.$axios({
        url: "http://localhost:8000/api/v1/members/",
        method: "POST",
        data: formdata,
        headers: tok,
      })
        .then(res => {
          alert(`Member Added Successfully ${res}`);
        })
        .catch(err => {
          console.log('error')
          console.log(err);
        });
    }
  } //done upto the scope of MVP
};
</script>