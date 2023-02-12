const conn = require('../db/conn')

const getAll = async () => {
    const [play] = await conn.execute('SELECT * FROM jogos')

    return play
}

const createPlay = async (play) => {
    const {title, nota, img} = play

    const query = 'INSERT INTO jogos (title, nota, img) VALUE (?, ?, ?)'

    const [plays] = await conn.execute(query, [title, nota, img])

    return {insertId: plays.insertId}
}

const deletePlay = async (id) => {
    const play = conn.execute('DELETE FROM jogos WHERE id = ?', [id])

    return play
}

const editPlay = async (id, play) => {
    const {title, nota, img} = play

    const query = 'UPDATE jogos SET title = ?, nota = ?, img = ? WHERE id = ?'

    const plays = await conn.execute(query, [title, nota, img, id])

    return plays
}

module.exports = {
    getAll,
    createPlay,
    deletePlay,
    editPlay
}