<script>

import { obterCategorias} from '@/http/index';

export default {

    //Mudança necessária, para fazer requisições ao arquivo Json na Web. Requisição Assincrona
    /* data() {
        return {
            categorias: obterCategorias()
        }
    } */
   
    data() {
      return {
        categorias: []
      }
    },

    //Método do clico de vida
    async created() {
      this.categorias = await obterCategorias();
   }
}
</script>

<template>
    <h1 class="cabecalho titulo-ingredientes">Ingredintes</h1>

    <p class="paragrafo-lg instrucoes">
        Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
        <li v-for="categoria in categorias" :key="categoria.nome">
          {{ categoria.nome }}
        </li>
    </ul>

    <p class="oaragrafo dica">
        *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
  }
  
  .instrucoes {
    margin-bottom: 2rem;
  }
  
  .categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  
  .dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
  }
  
  @media only screen and (max-width: 767px) {
    .dica {
      margin-bottom: 2.5rem;
    }
  }
  
</style>
