
const endpoint = ./desktop/allGithubProjects/CC/character.jscrc;

const characters = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => character.push(...data));

    console.log(characters);