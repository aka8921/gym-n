<template>
    <v-content>
        <v-app-bar
        color="deep-purple"
        dark
        >

                <v-btn icon
                @click="$router.go(-1)"
                v-if="this.$route.name != 'home'"
                >
                <v-icon>
                    <v-icon>mdi-heart</v-icon>
                </v-icon>
                </v-btn>

            <v-toolbar-title  v-if="this.$route.name === 'home'">Slim Fit Gym</v-toolbar-title>
            <v-toolbar-title  v-else>{{this.$route.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link
            to="/add-member"
            >
                <v-btn icon>
                <v-icon>
                    <v-icon>mdi-heart</v-icon>
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