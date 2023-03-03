document.addEventListener('DOMContentLoaded', () => {
    function getCharacters(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            let characterNames = data.results
            const characters = characterNames.map((obj) => obj.name)
            const ol = document.getElementById('characters')
            characters.map(name => {
                const li = document.createElement('li')
                li.textContent = name
                ol.append(li)
            })
        })
    }

    const characterInfo = document.querySelector('.getCharactersCard')
    characterInfo.addEventListener('submit', e => {
        e.preventDefault()
        
        const div = document.createElement('div')           
        const img = document.createElement('img')          
        const name = document.createElement('h2')          
        const gender = document.createElement('h3')        
        const status = document.createElement('h3')          
        const species = document.createElement('h3')        
        const origin = document.createElement('h3')
        const post = document.getElementById('characterCardHolder')

        const id = document.getElementById('characterNumber').value
        const characterURL = `https://rickandmortyapi.com/api/character/${id}`
        fetch(characterURL)
        .then(res => res.json())
        .then(data => {
            div.classList.add('character')
            img.src = data.image
            name.textContent = data.name
            gender.textContent = `Gender: ${data.gender}`
            status.textContent = `Status: ${data.status}`
            species.textContent = `Species: ${data.species}`
            origin.textContent = `Origin: ${data.origin.name}`
            div.append(img, name, gender, status, species, origin)
            post.append(div)
        })
        characterInfo.reset()
    })

    const characterList = document.querySelector('ol')
    characterList.addEventListener('click', e => {
        if(e.target.matches('li')) {
            e.target.style.color = 'red'
        }
    })
  
    getCharacters()
})