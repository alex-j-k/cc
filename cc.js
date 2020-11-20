
// const endpoint = 'https://github.com/alex-j-k/cc/blob/main/character.json';
// const endpoint = 'https://github.com/alex-j-k/cc/blob/main/character.jscrc';

// const bodyParser = require("body-parser");



// const endpoint = 'http://alex-j-k.github.io/CC/character.json';
// const endpoint = 'http://alex-j-k.github.io/CC/character.jscrc';


const endpoint = 'https://raw.githubusercontent.com/alex-j-k/cc/main/character.json';

const characters = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => characters.push(...data))
    .catch(error => console.error(error));

    console.log(characters);
    console.log(typeof(characters));

// CHARACTER CLASS CONSTRUCTOR

class Character {
    constructor(main, pinyin, def, list, ){
        this.main = main;
        this.pinyin = pinyin;
        this.def = def;
        this.list = list;
    }
}

const 喝 = new Character('喝', 'he1','drink',['喝','曷', '渴', '揭', '歇'], 
);
console.log(喝.main);
console.log(喝.pinyin);


//GENERIC FUNCTION TO CREATE NEW CHARCTER INFORMATION SLAB
function createSlab(ch){

    let newSlab = `<div class="characterslab">
                <div class="maincharacter">
                <h1>${ch.main}</h1>
            </div>
            <div class="infoandlist">
                <div class="info">
                    <p class="pmain">${ch.pinyin}</p>
                    <p class="pmain">${ch.def}</p>
                </div>
                <div class="list">
                    <p class="pmain"> ${ch.list.join('   ')}</p>
                </div>
            </div>
    </div>`;

    document.getElementById('wrapper').innerHTML += newSlab; 
};


setTimeout(function(){createSlab(喝)}, 000);




//FUNCTION SHOW HIDDEN SLABS

const unhide = function(){
    const hiddenslabs = document.getElementsByClassName('confusingslabcontainer');
    for(let i = 0; i < hiddenslabs.length; ++i )
    {if (hiddenslabs[i].style.display === "inline-block") {hiddenslabs[i].style.display = "none"}  
    else {
        hiddenslabs[i].style.display = "inline-block";
}}
};


//ADD EVENT LISTENERS TO ALL SLABS

setTimeout(() =>{  
const characterSlabs = document.getElementsByClassName('characterslab');
console.log(characterSlabs);

for (var i = 0; i < characterSlabs.length; ++i) {
    characterSlabs[i].addEventListener('click', unhide);
}
}, 2000 );



//SORT CHARACTERS BY PINYIN
const testArray = ['歇', '曷', '喝', '渴', '揭'];
console.log(testArray);
testArray.sort();
console.log(testArray);


console.dir(testArray.sort(function(a, b){
    return a.localeCompare(b, [ "zh-CN-u-co-pinyin" ]); 
}));
console.log(testArray);











const endpointsss = 'http://ccdb.hemiola.com/characters/mandarin/definition/radicals/peng';

const charactersss = [];

fetch(endpointsss)
    .then(response => response.json())
    .then(data => charactersss.push(...data))
    .catch(error => console.error(error));

    console.log(charactersss);
    console.log(typeof(charactersss));