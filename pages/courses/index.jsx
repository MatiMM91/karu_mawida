// IMPORTS
import { 
    Box, 
    Typography,  
}                       from "@mui/material"
import CoursesCard      from "../components/courses/CoursesCard"
import { useRouter }    from "next/router"
import en               from '../lang/en'
import es               from '../lang/es'
import axios            from "axios"
// END IMPORTS

// COMPONENT
const index = ({courses}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
        <Box className='courses'>
            <Typography variant='h3'>
                {t.formcourses.courses}
            </Typography>
            <CoursesCard courses={courses}/>
        </Box>
        <style jsx global>{`
            .courses {
                min-height:     100vh;
                padding:        0 60px;
                padding-top:    100px;
            }
        `}</style>
    </>
    )
}
export default index
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