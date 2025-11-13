const autozarAdmin = (req, res , next) =>{
    const user = req.user
    if (!user || user.role !== 'admin'){
        return res.status(403).send('Permiso denegado, solo admin')
    }
    console.log(user)
    next()
}

module.exports = autozarAdmin