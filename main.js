const loadword= (word)=>{

const url= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
fetch(url).then(res=>res.json()).then(data=>displayword(data[0]))


}

const displayword=words=>{
const wordcontainer=document.getElementById('wordcontainer')
// console.log(words);


let partsofspeech= [];

for (let i=0; i<words.meanings.length; i++){

 partsofspeech.push(words.meanings[i].partOfSpeech)
//  console.log(partsofspeech)

}



    wordcontainer.innerHTML=`
    <p class="list-group-item">Word: <span class="span">${words.word}</span></p>
    <p class="list-group-item">Phonetic:<span class="span">${words.phonetics[0].text}</span></p>

    <audio controls autoplay>
      <source src="${words.phonetics[0].audio}" type="audio/mpeg">
    </audio><br>

    <p class="list-group-item">Definition: <span class="span">${words.meanings[0].definitions[0].definition}</span></p>
    <p class="list-group-item">Example: <span class="span">${words.meanings[0].definitions[0].example}</span></p>
    <p class="list-group-item">Parts Of Speech: <span class="span">${partsofspeech}</span></p>
    <p class="list-group-item">Synonyms: <span class="span">${words.meanings[0].synonyms[0]},${words.meanings[0].synonyms[1]}</span></p>
    <p class="list-group-item">Antonyms: <span class="span">${words.meanings[0].antonyms[0]}</span></p>
   `
}


const searchtext=()=>{

    const search=document.getElementById('search').value;
    loadword(search)
}



