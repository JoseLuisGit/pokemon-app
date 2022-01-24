<template>
  <div v-if="!pokemon">Por favor espere...</div>
  <div v-else>
    <h2>¿Quien es este Pokemon?</h2>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonsArr" @selection="getSelection" />
    <div class="fade-in">
      <p>{{ message }}</p>
      <button v-if="showPokemon" @click="playAgain">Play Again</button>
    </div>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonsOptions from "@/helpers/getPokemonsOptions";

export default {
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      message: "",
    };
  },
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  methods: {
    async getPokemons() {
      this.pokemonsArr = await getPokemonsOptions();

      let num = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonsArr[num];
    },
    getSelection(pokemonId) {
      this.showPokemon = true;
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, el pokémon es ${this.pokemon.name}`;
      } else {
        this.message = `Ops, incorrecto era ${this.pokemon.name}`;
      }
    },
    playAgain() {
      this.getPokemons();
      this.showPokemon = false;
      this.pokemon = null;
      this.message = "";
    },
  },
  mounted() {
    this.getPokemons();
  },
};
</script>

<style>
</style>