<template>
    <h2> ¿Quien es este Pokemon? </h2>
    <PokemonPicture :pokemonId="45" :showPokemon="true" />
    <PokemonOptions :pokemons="pokemonsArr" />
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonsOptions from '@/helpers/getPokemonsOptions'

export default {
  data(){
    return {
      pokemonsArr: []
    }
  },
  components: { 
      PokemonPicture,
      PokemonOptions
  },
  methods:{
    async getPokemons(){
      this.pokemonsArr = await getPokemonsOptions();
    }
  },
  mounted(){
    this.getPokemons();
  }


}
</script>

<style>

</style>