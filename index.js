document.addEventListener('DOMContentLoaded', () => {
    function getCharacters(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            let array = data.results
            console.log(array)
            const characters = array.map((obj) => obj.name)
            const ol = document.getElementById('characters')
            characters.map(name => {
                const li = document.createElement('li')
                li.textContent = name
                ol.append(li)
            })
        })
    }
    
    getCharacters()
} )