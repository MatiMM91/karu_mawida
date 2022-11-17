import { pool } from '../../../config/db'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getCategory(req, res)
        case 'DELETE':
            return await deleteCategory(req, res)
        case 'PUT':
            return await updateCategory(req, res)
        default:
            break;
    }
}

export default handler

const getCategory = async (req, res) => {
    try {
        const { id } = req.query
        const [result] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id])
        return res.status(200).json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.query
        await pool.query('DELETE FROM categorias WHERE id = ?', [id])
        return res.status(204).json()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateCategory = async (req, res) => {
    const { id } = req.query
    const { categoria, clasificacion, descripcion} = req.body
    try {
        await pool.query(
            'UPDATE categorias SET categoria = ?, clasificacion = ?, descripcion = ? WHERE id = ?', 
            [categoria, clasificacion, descripcion, id]
            )
            return res.status(204).json()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}