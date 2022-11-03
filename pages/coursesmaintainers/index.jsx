// IMPORTS
import { 
    Box,
    Button,
    Stack, 
    Typography,
}                       from "@mui/material"
import { useRouter }    from "next/router"
import { useState }     from "react"
import en               from '../lang/en'
import es               from '../lang/es'
import AddCourses       from "../components/courses/AddCourses"
import CoursesTable     from "../components/courses/CoursesTable"
import axios            from "axios"
// END IMPORTS

// COMPONENT
const index = ({courses}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
    <>
        <Box className='coursesmaintainers'>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Typography variant='h3'>{t.formcourses.title}</Typography>
                <Button onClick={handleOpen} sx={{fontWeight: 'bold'}}>
                    {
                        open ?
                        t.formcourses.courses
                        :
                        t.formcourses.add
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
    </>
    )
}
// END COMPONENT
// BACKEND
export const getServerSideProps = async (context) => {
    const { data: courses} = await axios.get("http://localhost:3000/api/courses")
    return {
        props: {
            courses,
        }
    }
}
// END BACKEND
export default index