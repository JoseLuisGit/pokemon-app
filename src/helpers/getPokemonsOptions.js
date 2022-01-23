import pokemonApi from "../api/pokemonApi";


const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));

  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonsOptions = async() => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemonsOptions = await getPokemonNames(mixedPokemons.splice(0,4));

  console.table(pokemonsOptions);
  return pokemonsOptions;
};

const getPokemonNames = async( [a,b,c,d] ) => {
    
    //const resp = await pokemonApi.get(`/${ a }`);
    //console.log(resp);

    const respPokemons = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)

    ]
    const [p1, p2, p3, p4] = await Promise.all(respPokemons)

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}  
    ]

    
};

export default getPokemonsOptions;
