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
            const post = document.getElementById('characterCard')
            const img = document.createElement('img')
            img.src = card[8]
            post.append(img)
        })
    })

    document.addEventListener('click', e => {
        if(e.target.matches('li')) {
            e.target.style.color = 'red'
        }
    })

    getCharacters()
} )