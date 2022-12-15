import {pool} from '../../../config/db'

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getCourses(req, res)
        default:
            break;
    }
}

export default handler

const getCourses = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cursos WHERE activo = 1')
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}