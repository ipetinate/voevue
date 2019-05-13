<template>
  <v-layout row wrap>
    <v-flex md8 sm10 xs12>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn :to="link" icon>
                    <v-icon>open</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'Vue.js - Oficial Site', link: 'https://vuejs.org/', src: 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a', flex: 12 },
      { title: 'Vuetify - Oficial Site', link: 'https://vuetifyjs.com/', src: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png', flex: 6 },
      { title: 'Axios - Oficial Repo', link: 'https://github.com/axios/axios', src: 'https://cdn-images-1.medium.com/max/2400/1*Y4XYHylpigYOvfeqGWQmiQ.png', flex: 6 }
    ]
  })
}
</script>
