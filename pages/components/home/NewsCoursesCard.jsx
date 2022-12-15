import { 
    Box,
    Stack,
    Typography,
}                       from "@mui/material"
import moment           from 'moment'
import Image            from "next/image"
import { useRouter }    from "next/router"

const NewsCoursesCard = ({themeMode, changeTheme, course}) => {
    const router = useRouter()
    return (<>
    <Stack 
        direction="row" 
        className='newscourse'
        onClick={() => router.push('/courses/course/' + course.id)}
    >
        <Image
            width='120'
            height='100'
            src={
                themeMode ?
                "/images/karumawidaclaro.png"
                :
                "/images/karumawidaoscuro.png"
            }
            alt='Logo'
        />
        <Box className='textcourse'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Próximo Curso
            </Typography>
            <Typography variant="h5" component="div">
                {course.curso}
            </Typography>
            <Typography color="text.secondary">
                {
                    moment(course.fecha_inicio).format('DD MMM YYYY') + 
                    ' - ' + 
                    moment(course.fecha_termino).format('DD MMM YYYY')
                }
            </Typography>
        </Box>
    </Stack>
    <style jsx global>{`
        .newscourse {
            margin-top: 25px;
            height:     150px;
        }

        .newscourse:hover {
            cursor: pointer;
        }

        .textcourse {
            margin-left: 15px;
            margin-top: 35px;
        }
    `}</style>
    </>)
}
export default NewsCoursesCard