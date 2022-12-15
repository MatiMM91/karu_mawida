import {pool}       from '../../../config/db'
import fs           from 'fs'
import path         from 'path'
import multer       from 'multer'
// import nc           from 'next-connect'

// export const config = {
//     api: {
//         bodyParser: false,
//     }
// }

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb( null, path.join('public', 'coursesimg', './') ),
    filename: (req, file, cb) => {
        cb(null, 'karumawida-' + file.originalname)
        console.log(file)
    }
})

const upload = multer({ 
    storage, 
    dest: 'images/', 
}).single('img')

let handler = (upload, async (req, res) => {
    switch (req.method) {
        case 'GET':
            return await getCourse(req, res)
        case 'POST':
            return await saveCourse(req, res)
    }
})

// handler = nc({
//     onError: (err, req, res, next) => {
//       console.error(err.stack);
//       res.status(500).end("Algo se rompió!");
//     },
//     onNoMatch: (req, res) => {
//       res.status(404).end("No se encuentra la página");
//     },
// })
// .use(upload.single('image'))

export default handler
        
const getCourse = async (req, res) => {

    try {
        const [result] = await pool.query('SELECT * FROM cursos')
        
        result.map(img => {
            fs.writeFileSync( path.join("public", "upload", './' + img.curso + '-karumawida.jpg'), img.img )
            result.img = fs.readdirSync(path.join('public', 'upload', './')) 
        })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
    
const saveCourse = async (req, res) => {
    upload
    try {
        const { curso, capacidad, precio, horas, fecha_inicio, fecha_termino, img, descripcion, activo} = req.body

        // const image = fs.readFileSync(path.join('public', 'coursesimg', './'))
        // fs.writeFileSync( path.join('public', 'coursesimg', './' + curso + '-karumawida.jpg'), img)
        
        // console.log(curso + ': ' + img)
        // const image = fs.readFileSync( path.join('public', 'coursesimg', './' + req.file.filename) )

        console.log(req.body)
        
        console.log('Soy la imagen desde el backend del curso: ' + curso)
        console.log('Capacidad: ' + capacidad)
        console.log('Precio: ' + precio)
        console.log('Horas: ' + horas)
        console.log('Fecha Inicio: ' + fecha_inicio)
        console.log('Fecha Termino: ' + fecha_termino)
        console.log('Activo: ' + activo)
        console.log('Descripción: ' + descripcion)
        console.log(img)

        // console.log(image)

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