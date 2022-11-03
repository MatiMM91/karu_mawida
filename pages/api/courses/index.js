import {pool}       from '../../../config/db'
import nc           from "next-connect"
import onError      from 'error-middleware'
import multer       from 'multer'
import path         from 'path'

// export const config = {
//     api: {
//         bodyParser: false,
//     }
// }

let handler = nc(onError)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => cb(null, file.fildname + "_" + Date.now() + path.extname(file.originalname)),
})

const upload = multer({
    storage: storage,
});

const uploadFile = upload.single('file')

handler.use(uploadFile)

handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getCourse(req, res)
        case 'POST':
            return await saveCourse(req, res)
    }
}

export default handler
        
const getCourse = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cursos')
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
    
const saveCourse = async (req, res) => {
    try {
        const { curso, capacidad, precio, horas, fecha_inicio, fecha_termino, img, descripcion, activo} = req.body
    
        const [result] = await pool.query("INSERT INTO cursos SET ?", {
            curso,
            capacidad,
            precio,
            horas,
            fecha_inicio,
            fecha_termino,
            img,
            descripcion,
            activo,
        })
        return res.status(200).json({ curso, capacidad, precio, horas, fecha_inicio, fecha_termino, img, descripcion, activo, id: result.insertId})
    } catch (error) {
        return res.status(500).json({ message: error.message })       
    }
}