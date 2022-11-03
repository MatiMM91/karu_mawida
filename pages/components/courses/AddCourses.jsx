// IMPORTS
import { 
    Button, 
    TextField, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
import axios            from 'axios'
import moment           from 'moment'
import { 
    useEffect, 
    useState 
}                       from "react"
import {toast}          from "react-toastify"
// END IMPORTS
// COMPONENT
const AddCourses = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    const router = useRouter()

    router.query.fecha_inicio = moment(router.query.fecha_inicio).format('YYYY-MM-DD')
    router.query.fecha_termino = moment(router.query.fecha_termino).format('YYYY-MM-DD')

    const [course, setCourse] = useState({
        curso: "",
        capacidad: "",
        precio: 0,
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

    return (
    <>
    <form className='form' method='post'>
        <TextField 
            name='curso' 
            onChange={handleChange}
            value={course.curso}
            className='inputs' 
            variant='standard' 
            label={t.formcourses.course}
        />
        <TextField 
            name='capacidad' 
            onChange={handleChange} 
            value={course.capacidad}
            className='inputs' 
            variant='standard' 
            label={t.formcourses.capacity}
        />
        <TextField 
            name='precio' 
            onChange={handleChange} 
            value={course.precio}
            className='inputs' 
            variant='standard' 
            label={t.formcourses.price}
        />
        <TextField 
            name='horas' 
            onChange={handleChange} 
            value={course.horas}
            className='inputs' 
            variant='standard' 
            label={t.formcourses.hours} 
            type='time'
        />
        <TextField 
            name='fecha_inicio' 
            onChange={handleChange} 
            value={moment(course.fecha_inicio).format('YYYY-MM-DD')}
            className='inputs' 
            variant='standard' 
            label={t.formcourses.startdate} 
            type='date'
        />
        <TextField 
            name='fecha_termino' 
            onChange={handleChange} 
            value={moment(course.fecha_termino).format('YYYY-MM-DD')}
            className='inputs' 
            variant='standard' 
            label={t.formcourses.enddate} 
            type='date'
        />
        <TextField 
            name='img' 
            onChange={handleChange} 
            value={course.img}
            className='inputs' 
            variant='standard' 
            label={t.formcourses.img} 
            type='file'
        />
        <TextField 
            name='descripcion' 
            onChange={handleChange}
            value={course.descripcion}
            className='inputs' 
            variant='standard' 
            multiline 
            label={t.formcourses.description}
        />
        <Button variant="contained" className='inputs' onClick={handleSubmit}>{t.formcourses.add}</Button>
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
    </>
    )
}
export default AddCourses
// END COMPONENT