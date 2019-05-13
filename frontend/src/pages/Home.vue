<template>
  <v-layout row wrap>
    <v-flex md12 xs12 sm12>
      <router-link></router-link>
    </v-flex>
    <v-flex xs12 md12 sm12>
      <Menu/>
    </v-flex>
  </v-layout>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>
