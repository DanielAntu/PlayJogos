const form_create = document.querySelector('.form-create')
const title_create = document.querySelector('#title-create')
const nota_create = document.querySelector('#nota-create')
const img_create = document.querySelector('#img-create')
const back = document.querySelector('.back')

const createPlay = async (e) => {
    e.preventDefault()
    const play = {
        title: title_create.value,
        nota: nota_create.value,
        img: img_create.value
    }

    await fetch('http://localhost:3333/plays', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(play)
    })

    location.href = '../index.html'
}

form_create.addEventListener('submit', createPlay)

back.addEventListener('click', () => {
    location.href = '../index.html'
})