<template>
    <v-content>
        <v-app-bar
        color="red--darken"
        dark
        
        >

                <v-btn icon
                @click="$router.go(-1)"
                v-if="this.$route.name != 'home'"
                >
                <v-icon>
                    mdi-arrow-left-bold
                </v-icon>
                </v-btn>

            <v-toolbar-title  v-if="this.$route.name === 'home'">Slim Fit Gym</v-toolbar-title>
            <v-toolbar-title  v-else>{{this.$route.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link to = '/logout' class="url">
                <v-btn>
                    Log Out
                </v-btn>
            </router-link>
            <router-link
            to="/add-member"
            class="url"
            >
                <v-btn icon>
                <v-icon>
                    mdi-account-plus
                </v-icon>
                </v-btn>
            </router-link>
        </v-app-bar>
    </v-content>
</template>

<script>
export default {
    name:'appBar'
}
</script>

<style scoped>
.url{
    text-decoration: none;
}
</style>