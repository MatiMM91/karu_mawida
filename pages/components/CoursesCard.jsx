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
import en               from '../lang/en'
import es               from '../lang/es'
// END IMPORTS

// COMPONENT
const CoursesCard = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    const courses = [
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: 'Esta es una descripción medianamente larga para el curso que se requiere implementar en la página web de Karu Mawida con el fin de revisar como queda alineada esta descripción en el Card. Esta es una descripción medianamente larga para el curso que se requiere implementar en la página web de Karu Mawida.',
        },
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: t.formcourses.description,
        },
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: t.formcourses.description,
        },
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: t.formcourses.description,
        },
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: t.formcourses.description,
        },
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: t.formcourses.description,
        },
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: t.formcourses.description,
        },
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: t.formcourses.description,
        },
        {
            course: t.formcourses.course,
            capacity: t.formcourses.capacity,
            price: '$40.000',
            hours: t.formcourses.hours,
            startdate: t.formcourses.startdate,
            enddate: t.formcourses.enddate,
            icon: t.formcourses.icon,
            description: t.formcourses.description,
        },
    ]
    
    return (
    <Grid container>
        {
            courses.map((course, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} xl={3}>
                    <Card className="card">
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height='140'
                                image='/images/Banner.jpeg'
                                alt='Course'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {course.course}
                                </Typography>
                                <Typography variant="body2">
                                    {course.description}
                                </Typography>
                                <Typography variant="body2">
                                    {t.formcourses.capacity + ': ' + course.capacity}
                                </Typography>
                                <Typography variant="body2">
                                    {t.formcourses.hours + ': ' + course.hours}
                                </Typography>
                                <Typography variant="body2">
                                    {t.formcourses.startdate + ': ' + course.startdate}
                                </Typography>
                                <Typography variant="body2">
                                    {t.formcourses.enddate + ': ' + course.enddate}
                                </Typography>
                                <Typography variant="body2">
                                    {course.icon}
                                </Typography>
                                <Typography 
                                    variant="h4" 
                                    color="primary"
                                    sx={{
                                        display:'flex',
                                        justifyContent: 'end',
                                    }}
                                >
                                    {course.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <style jsx global>{`
                        .card {
                            margin: 30px;
                            min-height: 480px;
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