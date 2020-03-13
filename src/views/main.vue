<template>
    <v-app>
        <appBar />
        <v-content>
        <router-view/>
        </v-content>
    </v-app>
</template>

<script>
import appBar from '../components/appBar'

export default {
    name:"main",
    components:{
        appBar,
    }
}
</script>