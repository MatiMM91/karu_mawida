// IMPORTS
import { 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Grid, 
    Typography 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
// END IMPORTS
// COMPONENT
const CoursesCard = ({courses}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    const router = useRouter()

    return (
    <Grid container>
    {
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
    }
    </Grid>
    )
}
export default CoursesCard
// END COMPONENT