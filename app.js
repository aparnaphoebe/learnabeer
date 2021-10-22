document.addEventListener('DOMContentLoaded', () => {    
    const startBtn = document.querySelector('.beer-button')    
    const randomBeer = document.querySelector('.random-beer') 
    const descriptionDisplay = document.querySelector('.description')
    const goesWithDisplay = document.querySelector('.goeswith')
    function getData(){
        fetch('https://api.punkapi.com/v2/beers/random') 
            .then(response =>{
                return response.json()
            })
            .then(data => {    
                const name = data[0].name;
                const description = data[0].description;
                const {volume} = data[0] //volume is itself an object in the json 
                const volumeValue = volume.value;             
                const volumeUnit = volume.unit;            
                const foodPairing  = data[0].food_pairing
                var foods = name + " goes really well with: " 
                foodPairing.forEach(f => {
                    foods += f + ',' 
                });                
                foods = foods.substr(0,foods.length-1)
                randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit
                descriptionDisplay.innerHTML = description
                goesWithDisplay.innerHTML = foods
            })
    }
    startBtn.addEventListener('click' , getData)
})