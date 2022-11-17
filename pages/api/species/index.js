import {pool}       from '../../../config/db'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getSpecies(req, res)
        case 'POST':
            return await saveSpecies(req, res)
    }
}

export default handler

const getSpecies = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT esp.id, esp.nombre_especie, esp.nombre_cientifico, esp.origen, esp.habitat, esp.informacion_general, cat.categoria, esp.categoria_id, cat.clasificacion, esp.created_at FROM especies esp JOIN categorias cat ON esp.categoria_id = cat.id')
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const saveSpecies = async (req, res) => {
    try {
        const { nombre_especie, categoria_id, nombre_cientifico, origen, habitat, informacion_general} = req.body
    
        const [result] = await pool.query("INSERT INTO especies SET ?", {
            nombre_especie,
            categoria_id,
            nombre_cientifico,
            origen,
            habitat,
            informacion_general
        })
        return res.status(200).json({ nombre_especie, categoria_id, nombre_cientifico, origen, habitat, informacion_general, id: result.insertId})
    } catch (error) {
        return res.status(500).json({ message: error.message })       
    }
}