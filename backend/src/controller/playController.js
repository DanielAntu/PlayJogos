const playModel = require('../model/playModel')

const getAll = async (req,res) => {
    const plays = await playModel.getAll()

    return res.status(200).json(plays)
}

const createPlay = async (req,res) => {
    const plays = await playModel.createPlay(req.body)

    return res.status(200).json(plays)
}

const deletePlay = async (req,res) => {
    const {id} = req.params
    await playModel.deletePlay(id)

    return res.status(201).json()
}

const editPlay = async (req,res) => {
    const {id} = req.params

    await playModel.editPlay(id, req.body)

    return res.status(201).json()
}

module.exports = {
    getAll,
    createPlay,
    deletePlay,
    editPlay
}