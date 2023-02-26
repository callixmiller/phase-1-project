document.addEventListener('DOMContentLoaded', () => {
    function getCharacters(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            let array = data.results
            const characters = array.map((obj) => obj.name)
            const ol = document.getElementById('characters')
            characters.map(name => {
                const li = document.createElement('li')
                li.textContent = name
                ol.append(li)
            })
        })
    }

    const characterInfo = document.querySelector('.getCharacter')
    characterInfo.addEventListener('submit', e => {
        e.preventDefault()
        
        const id = document.getElementById('characterNumber').value
        const characterURL = `https://rickandmortyapi.com/api/character/${id}`
        fetch(characterURL)
        .then(res => res.json())
        .then(data => {
            const card = Object.values(data)
            const post = document.getElementById('characterCard')
            const div = document.createElement('div')
            div.classList.add('character')
            const img = document.createElement('img')
            const name = document.createElement('h2')
            const gender = document.createElement('h3')
            const status = document.createElement('h3')
            const species = document.createElement('h3')
            img.src = card[8]
            name.textContent = card[1]
            gender.textContent = `Gender: ${card[5]}`
            status.textContent = `Current status on the show: ${card[2]}`
            species.textContent = `Species: ${card[3]}`
            div.append(img, name, gender, status, species)
            post.append(div)
        })
        characterInfo.reset()
    })

    document.addEventListener('click', e => {
        if(e.target.matches('li')) {
            e.target.style.color = 'red'
        }
    })
  
    getCharacters()
} )