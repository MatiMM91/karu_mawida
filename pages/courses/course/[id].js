import { 
    Box, 
    Card, 
    CardContent, 
    CardMedia, 
    Typography 
}                       from '@mui/material'
import { useRouter }    from "next/router"
import { 
    useState 
}                       from 'react'
import axios            from 'axios'
import moment           from 'moment'

const course = () => {
    const router = useRouter()
    
    const [course, setCourse] = useState({
        curso: '',
        capacidad: "",
        precio: 0,
        horas: '',
        fecha_inicio: '',
        fecha_termino: '',
        img: '',
        descripcion: '',
        activo: true,
    })

    const getCourse = async () => {
        const {data} = await axios.get('/api/courses/' + router.query.id)
        setCourse(data)
    }
    
    getCourse(router.query.id)
    
    return (<>
    <Box className='course'>
        <Typography variant='h3' name='curso'>
            {course.curso}
        </Typography>
        <Typography variant='h6' name='descripcion'>
            {course.descripcion}
        </Typography>
        
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 250 }}
                image="/static/images/cards/live-from-space.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant='h6' name='descripcion'>
                        {'Capacidad: ' + course.capacidad}
                    </Typography>
                    <Typography variant='h6' name='descripcion'>
                        {'Horas: ' + course.capacidad}
                    </Typography>
                    <Typography variant='h6' name='descripcion'>
                        {'Fecha inicio: ' + moment(course.fecha_inicio).format('DD-MM-YYYY')}
                    </Typography>
                    <Typography variant='h6' name='descripcion'>
                        {'Fecha Termino: ' + moment(course.fecha_termino).format('DD-MM-YYYY')}
                    </Typography>
                    <Typography variant='h4' name='descripcion'>
                        {'$' + course.precio}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    </Box>
    <style jsx global>{`
        .course {
            min-height:     80vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 40px;
        }
    `}</style>
    </>)
}
export default course