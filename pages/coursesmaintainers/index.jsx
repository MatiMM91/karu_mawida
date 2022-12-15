import { 
    Box,
    Button,
    Stack, 
    Typography,
}                       from "@mui/material"
import { useState }     from "react"
import AddCourses       from "../components/courses/AddCourses"
import CoursesTable     from "../components/courses/CoursesTable"
import axios            from "axios"
// import { 
//     unstable_getServerSession 
// }                       from "next-auth"
// import { authOptions }  from "../api/auth/[...nextauth]"

const index = ({courses}) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (<>
    <Box className='coursesmaintainers'>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{display: 'flex', justifyContent: 'space-between'}}
        >
            <Typography variant='h4' color='primary'>Mantenedor de Cursos</Typography>
            <Button variant='outlined' onClick={handleOpen} sx={{fontWeight: 'bold'}}>
                {
                    open ?
                        'Ver Cursos'
                    :
                        'Agregar Curso'
                }
            </Button>
        </Stack>
        {
            open === true ?
                <AddCourses/>
            :
                <CoursesTable
                    courses={courses}
                />
        }
    </Box>
    <style jsx global>{`
        .coursesmaintainers {
            min-height:     100vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 40px;

        }
    `}</style>
    </>)
}

export const getServerSideProps = async (context) => {
    const { data: courses} = await axios.get("http://localhost:3000/api/courses")
    // const session = await unstable_getServerSession(context.req, context.res, authOptions)

    // if (!session) {
    //     return {
    //         redirect: {
    //             destination: "/login",
    //             permanent: false
    //         }
    //     }        
    // }

    return {
        props: {
            courses,
        }
    }
}
export default index