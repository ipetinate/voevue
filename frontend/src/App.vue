<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">GitHub Repos</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <img id="vue-logo" src="./assets/logo.png" alt="Vue.js Logo">
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './pages/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
#vue-logo {
  max-width: 30%;
  padding-top: 10%;
}
</style>
