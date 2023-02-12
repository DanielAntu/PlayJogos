const validateBody = (req,res,next) => {
    const { body } = req

    if (body.title === undefined || body.nota === undefined || body.img === undefined) {
        return res.status(400).json('All fields need to be filled in')
    }

    if (body.title === '' || body.nota === '' || body.img === '') {
        return res.status(400).json('Fields cannot be empty')
    }

    next()
}

module.exports = {
    validateBody
}