import { 
    Button, 
    FormControlLabel, 
    Switch, 
    TextField, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import axios            from 'axios'
import moment           from 'moment'
import { useState }     from "react"
import { toast }        from "react-toastify"
import { useEffect }    from "react"
// import Image from "next/image"

const AddCourses = () => {
    const router = useRouter()
    router.query.fecha_inicio = moment(router.query.fecha_inicio).format('YYYY-MM-DD')
    router.query.fecha_termino = moment(router.query.fecha_termino).format('YYYY-MM-DD')
    
    const [file, setFile] = useState()
    const [pathImage, setPathImage] = useState(null)
    const [course, setCourse] = useState({
        curso: '',
        capacidad: '',
        precio: '',
        horas: '',
        fecha_inicio: '',
        fecha_termino: '',
        img: null,
        descripcion: '',
        activo: false,
    })

    console.log('SOY EL COURSE.IMG COMO ESTADO: ')
    console.log(course.img)
    
    const handleSubmit = async e => {
        e.preventDefault()

        try {
            let formdata = new FormData()
            formdata.append('image', course.img)

            course.img = formdata.get('image')

            console.log('Soy el formdata: ')
            console.log( formdata.get('image') )
            
            console.log('Soy el estado final del curso: ')
            console.log(course.img)



            if (course.curso === '' || course.capacidad === '' || course.precio === '' || course.horas === '' || course.fecha_inicio === '' || course.fecha_termino === '' || course.img === null || course.img === '' || course.descripcion === '') {
                toast.error('Hay algún campo vacío o con un valor incorrecto')
            } else {
                if (router.query.id) {
                    course.fecha_inicio = moment(course.fecha_inicio).format('YYYY-MM-DD')
                    course.fecha_termino = moment(course.fecha_termino).format('YYYY-MM-DD')
                    await axios.put('/api/courses/' + router.query.id, course)
                    toast.success('Curso actualizado con éxito')
                } else {
                    const {data} = await axios.post('/api/courses', course)
                    console.log(data)
                    toast.success('Curso creado con éxito')
                }
                router.push('/coursesmaintainers')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleChange = ({target: {name, value, checked, files}}) => {

        if (name === 'img') {
            if (files && files.length > 0) {
                const file = files[0]
                // setCourse(course.img = file)
                
                if (file.type.includes('image')) {
                    const reader = new FileReader()
                    reader.onload = () => {
                        setPathImage(reader.result)
                    }
                    reader.readAsDataURL(file)
                }    
            } else {
                setPathImage(null)
                setCourse(course.img = null)
            }
        }

        if (name === 'activo') {
            if (checked === 0) {
                checked = false
            } else if (checked === 1) {
                checked = true
            }         
            value = checked
        }
        setCourse({ ...course, [name]: name === 'img' ? files : value})
    }

    useEffect(() => {
        const getCourse = async () => {
            const {data} = await axios.get('/api/courses/' + router.query.id)
            
            if ( data.activo === 0 ) {
                data.activo = false
            } else if ( data.activo === 1 ) {
                data.activo = true
            }

            console.log('SOY UN DATA.IMG: ')
            console.log(data.img)

            setCourse(data)
        }

        if (router.query.id) {
            getCourse(router.query.id)
        }
    }, [])

    return (<>
    <form className='form' method='post'>
        <TextField 
            name='curso' 
            className='inputs' 
            variant='standard' 
            label='Curso'
            value={course.curso}
            onChange={handleChange}
        />
        <TextField
            type='number'
            name='capacidad' 
            className='inputs' 
            variant='standard' 
            label='Capacidad'
            value={course.capacidad}
            onChange={handleChange} 
        />
        <TextField
            type='number'
            name='precio' 
            className='inputs' 
            variant='standard' 
            label='Precio'
            value={course.precio}
            onChange={handleChange}
        />
        <TextField
            type='time'
            name='horas' 
            className='inputs' 
            variant='standard' 
            label='Horas'
            value={course.horas}
            onChange={handleChange} 
            focused
        />
        <TextField 
            type='date'
            name='fecha_inicio' 
            className='inputs' 
            variant='standard' 
            label='Fecha Inicio' 
            value={moment(course.fecha_inicio).format('YYYY-MM-DD')}
            onChange={handleChange} 
            focused
        />
        <TextField 
            type='date'
            name='fecha_termino' 
            className='inputs' 
            variant='standard' 
            label='Fecha Termino'
            value={moment(course.fecha_termino).format('YYYY-MM-DD')}
            onChange={handleChange} 
            focused
        />
        <TextField 
            type='file'
            name='img' 
            className='inputs' 
            variant='standard' 
            label='Imagen' 
            // value={course.img}
            onChange={handleChange} 
            // files={course.img}
        />
        {
        !pathImage ? 
            ''
        :
            <img src={pathImage} alt={course.curso} height='155px' width='255px'/>
        }
        <TextField 
            name='descripcion' 
            className='inputs' 
            variant='standard' 
            label='Descripción'
            value={course.descripcion}
            onChange={handleChange}
            multiline 
        />
        <FormControlLabel
            label={
                course.activo === 0 || course.activo === false ? 'Inactivo' : 'Activo'
            }
            className='inputs' 
            control={
                <Switch
                    name='activo'
                    checked={
                        course.activo === 0 || course.activo === false ?
                            false
                        :
                            true
                    }
                    onChange={handleChange}
                />
            }
        />

        <Button 
            variant="contained" 
            className='inputs' 
            onClick={handleSubmit}
        >
            {
            router.query.id ?    
                'Editar'
            :
                'Agregar'
            }
        </Button>
        {
        router.query.id ?
            <Button
                variant="contained" 
                className='inputs'
                onClick={() => router.back()}
            >
                Volver    
            </Button>
        :
            null    
        }
    </form>
    <style jsx global>{`
        .form {
            min-height:     100%;
            display:        flex;
            flex-direction: column;
            padding:        0 60px;
        }

        .inputs {
            margin-top:    15px;
        }
    `}</style>
    </>)
}
export default AddCourses