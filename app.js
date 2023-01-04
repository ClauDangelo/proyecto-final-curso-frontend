const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

fetch(URL_API)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const characters = data.results;

    for (let character of characters) {
      console.log(character);
      $container.innerHTML += `
              <div class="character-name"> 
              <img class="character-image" src="${character.image}" alt="Imagen de ${character.name}">
              <h3>${character.name}</h3>
              <h4>Especie: ${character.species}</h4>
              <h4>Origen: ${character.origin.name}</h4>
              <h4>Ubicación: ${character.location.name}</h4>            
              </div>
            `
    }
  })

