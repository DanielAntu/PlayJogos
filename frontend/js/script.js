const main = document.querySelector('.main')
const form_edit = document.querySelector('.form-edit')
const title_edit = document.querySelector('#title-edit')
const nota_edit = document.querySelector('#nota-edit')
const edit_img = document.querySelector('#img-edit')
const modal = document.querySelector('.modal')
const back = document.querySelector('.back')


// http://localhost:3333/plays

const getAll = async () => {
    const url = 'http://localhost:3333/plays'
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const deletePlay = async (id) => {
    await fetch(`http://localhost:3333/plays/${id}`, {
        method: 'DELETE'
    })

    loadPlay()
}

const editPlay = async ({id, title, nota, img}) => {
    await fetch(`http://localhost:3333/plays/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, nota, img})
    })

    modal.classList.add('hide')
    location.href = 'index.html'
}

const CreateCard = (plays) => {
    const {id, title, nota, img} = plays

    const card = document.createElement('div')
    card.classList.add('card')

    const image = document.createElement('img')
    image.src = img
    card.appendChild(image)

    const h2 = document.createElement('h2')
    h2.innerHTML = `${title}`
    card.appendChild(h2)

    const par = document.createElement('p')
    par.innerHTML = `<i class="bi bi-star-fill"></i> ${nota}`
    card.appendChild(par)

    const btn_action = document.createElement('div')
    btn_action.classList.add('btn-actions')

    const edit = document.createElement('button')
    edit.classList.add('btn')
    edit.innerHTML = '<i class="bi bi-pencil-fill"></i>'
    btn_action.appendChild(edit)
    edit.addEventListener('click', () => {
        title_edit.value = title
        nota_edit.value = nota
        edit_img.value = img

        modal.classList.remove('hide')
        form_edit.addEventListener('submit', (e) => {
            e.preventDefault()

            editPlay({id: id, title: title_edit.value, nota: nota_edit.value, img: edit_img.value})
        })
    })

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('btn')
    deleteButton.innerHTML = '<i class="bi bi-x-lg"></i>'
    btn_action.appendChild(deleteButton)
    deleteButton.addEventListener('click', () => deletePlay(id))
    
    card.appendChild(btn_action)

    return card
}

const loadPlay = async () => {
    const plays = await getAll()

    main.innerHTML = ''

    plays.forEach((play) => {
        const card = CreateCard(play)

        main.appendChild(card)
    });
}

back.addEventListener('click', () => {
    modal.classList.add('hide')
})

loadPlay()
