import {pool}       from '../../../config/db'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getCategory(req, res)
        case 'POST':
            return await saveCategory(req, res)
    }
}

export default handler

const getCategory = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM categorias')
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const saveCategory = async (req, res) => {
    try {
        const { categoria, clasificacion, descripcion} = req.body
    
        const [result] = await pool.query("INSERT INTO categorias SET ?", {
            categoria,
            clasificacion,
            descripcion,
        })
        return res.status(200).json({ categoria, clasificacion, descripcion, id: result.insertId})
    } catch (error) {
        return res.status(500).json({ message: error.message })       
    }
}