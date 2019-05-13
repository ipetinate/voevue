<template>
  <v-layout row wrap>
    <v-flex xs12 md12 sm12>
      <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
        <v-btn to="/" color="blue" flat value="home">
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn to="/vue" color="green" flat value="vuejs">
          <span>Vue</span>
          <v-icon>mdi-vuejs</v-icon>
        </v-btn>

        <v-btn to="/about" color="red" flat value="sobre">
          <span>Sobre</span>
          <v-icon>info</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "home"
    }
  }
}
</script>
