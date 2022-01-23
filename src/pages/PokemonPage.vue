<template>
  <div v-if="!pokemon">
    Por favor espere...
  </div>
  <div v-else>
    <h2> ¿Quien es este Pokemon? </h2>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonsArr" @selection="getSelection" />
  </div>
</template>

<script>    
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonsOptions from '@/helpers/getPokemonsOptions'

export default {
  data(){
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  components: { 
      PokemonPicture,
      PokemonOptions
  },
  methods:{
    async getPokemons(){
      this.pokemonsArr = await getPokemonsOptions();

      let num = Math.floor(Math.random() * 4 );

      this.pokemon = this.pokemonsArr[ num ];

    },
    getSelection(pokemonId){
      if(pokemonId === this.pokemon.id){
        this.showPokemon = true;
      }
    }
  },
  mounted(){
    this.getPokemons();
  }


}
</script>

<style>

</style>