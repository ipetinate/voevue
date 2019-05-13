<template>
  <v-flex pt-3 xs12 sm6 offset-sm3>
    <v-card>
      <v-img class="white--text" height="200px" :src="usuario.avatar_url">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">Nome de Usuario: {{usuario.login}}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-title>
        <div>
          <span class="grey--text">Nome: {{usuario.name}}</span>
          <br>
          <span>Bio: {{usuairo.bio}}</span>
          <br>
          <span>Repositorios: {{usuario.public_repos}}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn
          href="https://api.github.com/users/IsacPetinate/repos"
          flat
          color="orange"
        >Repositórios</v-btn>
        <v-btn href="https://github.com/IsacPetinate" flat color="orange">Perfil GH</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import MeuPerfil from '../api/MeuPerfil'

export default {
  name: 'About',
  data () {
    return {
      usuario: []
    }
  },
  methods: {
    listar () {
      MeuPerfil.obter('IsacPetinate').then(resposta => {
        console.log(resposta)
        this.usuario = resposta.data
      })
    }
  },
  mounted () {
    this.listar()
  }
}
</script>
