<template>
  <Card v-bind="frameworks"/>
</template>

<script>
import Frameworks from '../api/Frameworks'
import Card from "../components/Card";

export default {
  name: 'Frameworks',
  components: {
    Card
  },
  data() {
    return {
      frameworks: []
    }
  },
  methods: {
    // Metodo Listar, retorna os dados do GET na variável 'resposta'
    listar () {
      let perfil = ['vuejs', 'angular', 'facebook']
      let repos = ['vue', 'angular', 'react']

      Frameworks.obter(perfil, repos).then(resposta => {
        console.log(resposta)
        this.frameworks = resposta.data
      })
    }
  },
  // Ciclo de vida da aplicação Monta a chamada do método Listar
  // Guia: https://br.vuejs.org/v2/guide/instance.html
  mounted () {
    this.listar()
  }
}

</script>
