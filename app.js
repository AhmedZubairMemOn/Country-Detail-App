const img = document.querySelector('img')
const names = document.querySelector(".card-title")
const description = document.querySelector(".card-text")
const border = document.querySelector("#border")
const btn = document.querySelector("button")
const input = document.querySelector("input")
const card = document.querySelector(".card")

function submit(){
    console.log(input.value);
    card.style.display = 'block'
   if(input.value === ""){
    card.style.display = 'none'
   }
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((response) =>{
       return response.json()
    }).then((response) =>{
        const [country] = response
        console.log(country);
        const {name, flags, borders, capital, population} = country
        img.src = flags.png
        names.innerHTML = name.common
        description.innerHTML = `This is the country with the population of ${population} and the capital is ${capital[0]}`
    })
}