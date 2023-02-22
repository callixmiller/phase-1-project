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
    
    document.addEventListener('click', e => {
        if(e.target.matches('li')) {
            e.target.style.color = 'red'
        }
    })

    getCharacters()
} )