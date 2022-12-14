import { 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Grid, 
    Typography 
}                       from "@mui/material"
import { useRouter }    from "next/router"

const CoursesCard = ({courses}) => {
    const router = useRouter()

    return (
    <Grid container>
    {
    courses ?
    courses.map(course => (
        <Grid item key={course.id} xs={12} sm={6} md={4} xl={3}>
            <Card className="card">
                <CardActionArea
                    onClick={() => router.push('/courses/course/' + course.id)}
                >
                    <CardMedia
                        component='img'
                        height='140'
                        image='/images/Banner.jpeg'
                        alt='Course'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {course.curso}
                        </Typography>
                        <Typography 
                            variant="h4" 
                            color="primary"
                            sx={{
                                display:'flex',
                                justifyContent: 'end',
                            }}
                        >
                            ${course.precio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <style jsx global>{`
                .card {
                    margin: 30px;
                }
            `}</style>
        </Grid>
        ))
    :
    <Typography variant='h5'>
        No hay cursos activos en estos momentos
    </Typography>
    }
    </Grid>
    )
}
export default CoursesCard