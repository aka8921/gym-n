<template>
    <div class="red">
          <v-card
          class="mx-auto ma-5"
          max-width="344"
          outlined
          v-for="i in 12"
          :key="i"
          >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE{{i}}</div>
                  <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>Button</v-btn>
                <v-btn text>Button</v-btn>
              </v-card-actions>
        </v-card>
  </div>
</template>

<script>
export default {
    name:"home"

}
</script>