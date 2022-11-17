import { 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
}                       from "@mui/material"
import moment           from 'moment'

const NewsCoursesCard = ({themeMode, changeTheme, courses}) => {
    return (<>
    {
    courses.slice(-1).map(course => (
    <Card sx={{display: 'flex', height: 200, width: '85%'}} key={course.id}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'row', padding:1}}>
            <CardContent sx={{paddingRight: 5}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Próximo Curso
                </Typography>
                <Typography variant="h5" component="div">
                    {course.curso}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {
                        moment(course.fecha_inicio).format('DD MMM YYYY') + 
                        ' - ' + 
                        moment(course.fecha_termino).format('DD MMM YYYY')
                    }
                </Typography>
                <Typography variant="body2" sx={{width: 250}}>
                    {course.descripcion}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{width:100}}
                image={
                    themeMode ?
                    "/images/karumawidaclaro.png"
                    :
                    "/images/karumawidaoscuro.png"
                }
                alt='Logo'
            />
        </CardActionArea>
    </Card>
    ))
    }
    </>)
}
export default NewsCoursesCard