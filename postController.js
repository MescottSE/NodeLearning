
const pokemonArray = [];

async function getPokemon(){
    try{
        let amount = 10;
        const pokeNames = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`);
        let pokeJson = await pokeNames.json();
        let pokeData = await Promise.all(
            pokeJson.results.map(async (pokemon) => {
            return {name: pokemon.name, moves: await getMoves(pokemon.url)}}
        ));

        return pokeData.sort((a , b) => a.name.localeCompare(b.name));

    }catch(error){

        return [];
    }
    
}

async function getMoves(url){

    try{
        let movesResponse = await fetch(url);
        let movesJson = await movesResponse.json();

        let movesList = movesJson.moves.map(move => {
            return move.move.name;
        }).slice(0,3);

        return movesList;

    }catch(error){
        return [];
    }
}

export {getPokemon};

// function getPokemon(){

//     return fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
//         .then(response => response.json())
//         .then(data => {
    
//             data.results.forEach(element => {
//                 pokemonArray.push(
//                     {
//                         name: element.name,
//                         moves: fetch(element.url)
//                             .then(response => response.json())
//                             .then(data => {
//                                 let moves = [];

//                                 data.moves.forEach((move, index) => {
//                                     if(index >= 3){
//                                         return;
//                                     }
//                                     moves.push(move.move.name);
//                                 })
//                                 return moves;
//                             })
//                     }
//                 );
//             });
//             return pokemonArray;
//         })
//         .catch(error => {
//             console.log(error);
//             return [];
//         });
    
// }
