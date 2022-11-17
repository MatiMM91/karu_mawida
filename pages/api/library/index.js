import {pool} from '../../../config/db'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET': 
            return await getLibrary(req, res)
    }
}

export default handler

const getLibrary = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT esp.id, esp.nombre_especie, esp.nombre_cientifico, esp.origen, esp.habitat, esp.informacion_general, esp.categoria_id, cat.id, cat.categoria, cat.clasificacion FROM especies esp JOIN categorias cat ON esp.categoria_id = cat.id'
        )
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}