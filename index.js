
const jokeConatiner =document.getElementById('text');
const button =document.querySelector("button");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";




let getJoke = () =>{

    fetch(url)  //return promise 
   .then(data => data.json() )
 
    .then(item => {     //item contains object
        jokeConatiner.textContent = `${item.joke}`;
  
 } );
}


button.addEventListener('click',getJoke);



