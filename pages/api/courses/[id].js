import { pool } from '../../../config/db'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getCourse(req, res)
        case 'DELETE':
            return await deleteCourse(req, res)
        case 'PUT':
            return await updateCourse(req, res)
        default:
            break;
    }
}

export default handler

const getCourse = async (req, res) => {
    try {
        const { id } = req.query
        const [result] = await pool.query('SELECT * FROM cursos WHERE id = ?', [id])
        return res.status(200).json(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.query
        await pool.query('DELETE FROM cursos WHERE id = ?', [id])
        return res.status(204).json()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const updateCourse = async (req, res) => {
    const { id } = req.query
    const { curso, capacidad, precio, horas, fecha_inicio, fecha_termino, descripcion} = req.body
    try {
        await pool.query(
            'UPDATE cursos SET curso = ?, capacidad = ?, precio = ?, horas = ?, fecha_inicio = ?, fecha_termino = ?, descripcion = ? WHERE id = ?', 
            [curso, capacidad, precio, horas, fecha_inicio, fecha_termino, descripcion, id]
        )
        return res.status(204).json()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}