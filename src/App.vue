<script lang="ts">
import Banner from './components/Banner.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
import SelecionarIngredientesVue from './components/SelecionarIngredientes.vue';




export default {
  components: {
     Banner,
     ConteudoPrincipal,
    SelecionarIngredientesVue }
}
</script>

<template>
  <Banner />
  <conteudo-principal />
</template>
