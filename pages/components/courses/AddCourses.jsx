import { 
    Button, 
    TextField, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import axios            from 'axios'
import moment           from 'moment'
import { 
    useEffect, 
    useState 
}                       from "react"
import {toast}          from "react-toastify"

const AddCourses = () => {
    const router = useRouter()
    router.query.fecha_inicio = moment(router.query.fecha_inicio).format('YYYY-MM-DD')
    router.query.fecha_termino = moment(router.query.fecha_termino).format('YYYY-MM-DD')

    const [course, setCourse] = useState({
        curso: "",
        capacidad: "",
        precio: '',
        horas: '',
        fecha_inicio: '',
        fecha_termino: '',
        img: '',
        descripcion: '',
        activo: true,
    })
    
    const handleSubmit = async e => {
        e.preventDefault()

        try {
            if (router.query.id) {
                course.fecha_inicio = moment(course.fecha_inicio).format('YYYY-MM-DD')
                course.fecha_termino = moment(course.fecha_termino).format('YYYY-MM-DD')
                await axios.put('/api/courses/' + router.query.id, course)
                toast.success('Course updated successfully')
            } else {
                await axios.post('/api/courses', course)
                toast.success('Course created successfully')
            }
            router.push('/coursesmaintainers')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleChange = ({target: {name, value}}) => {
        setCourse({ ...course, [name]: value})
    }

    useEffect(() => {
        const getCourse = async () => {
            const {data} = await axios.get('/api/courses/' + router.query.id)
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
            name='capacidad' 
            className='inputs' 
            variant='standard' 
            label='Capacidad'
            value={course.capacidad}
            onChange={handleChange} 
        />
        <TextField 
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
        {
        router.query.id ?
            ''
        :
            <TextField 
                type='file'
                name='img' 
                className='inputs' 
                variant='standard' 
                label='Imagen' 
                value={course.img}
                onChange={handleChange} 
            />
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