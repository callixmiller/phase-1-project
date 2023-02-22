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
            console.log(card)
            // Cars should display character image, name, gender, status and species.
            const post = document.getElementById('characterCard')
            const img = document.createElement('img')
            const name = document.createElement('h2')
            const gender = document.createElement('h3')
            img.src = card[8]
            name.textContent = card[1]
            gender.textContent = `Gender: ${card[5]}`
            post.append(img)
            post.append(name)
            post.append(gender)
        })
    })

    document.addEventListener('click', e => {
        if(e.target.matches('li')) {
            e.target.style.color = 'red'
        }
    })

    getCharacters()
} )