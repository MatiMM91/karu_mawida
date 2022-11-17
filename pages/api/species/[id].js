import { pool } from '../../../config/db'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getSpecies(req, res)
        case 'DELETE':
            return await deleteSpecies(req, res)
        case 'PUT':
            return await updateSpecies(req, res)
        default:
            break;
    }
}

export default handler

const getSpecies = async (req, res) => {
    try {
        const { id } = req.query
        const [result] = await pool.query('SELECT esp.id, esp.nombre_especie, esp.nombre_cientifico, esp.origen, esp.habitat, esp.informacion_general, esp.categoria_id, cat.categoria, cat.clasificacion FROM especies esp JOIN categorias cat ON esp.categoria_id = cat.id WHERE esp.id = ?', [id])
        return res.status(200).json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteSpecies = async (req, res) => {
    try {
        const { id } = req.query
        await pool.query('DELETE FROM especies WHERE id = ?', [id])
        return res.status(204).json()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateSpecies = async (req, res) => {
    const { id } = req.query
    const { nombre_especie, categoria_id, nombre_cientifico, origen, habitat, informacion_general } = req.body
    try {
        await pool.query(
            'UPDATE especies SET nombre_especie = ?, categoria_id = ?, nombre_cientifico = ?, origen = ?, habitat = ?, informacion_general = ? WHERE id = ?', 
            [nombre_especie, categoria_id, nombre_cientifico, origen, habitat, informacion_general, id]
        )
        return res.status(204).json()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}