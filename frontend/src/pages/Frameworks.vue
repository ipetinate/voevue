<template>
  <v-layout row wrap>
    <v-flex md8 sm10 xs12>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="framework in frameworks"
              :key="framework.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card>
                <v-img :src="frameworks.src" height="200px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="framework.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn :to="framework.link" icon>
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
import Frameworks from "../api/Frameworks"

export default {
  name: "Frameworks",
  data() {
    return {
      angular: [],
      react: [],
      vue: []
    }
  },
  methods: {
    obterAngular() {
      Frameworks.obter('angular', 'angular').then(resposta => {
        console.log(resposta)
        this.frameworks.angular = resposta.data
      })
    },
    obterReact() {
      Frameworks.obter('facebook', 'react').then(resposta => {
        console.log(resposta)
        this.frameworks.react = resposta.data
      })
    },
    obterVue() {
      Frameworks.obter('vuejs', 'vue').then(resposta => {
        console.log(resposta)
        this.frameworks.vue = resposta.data
      })
    }
  },
  mounted() {
    this.obterAngular()
    this.obterReact()
    this.obterVue()
  }
}
</script>
