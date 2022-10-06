// IMPORTS
import { 
    Box, 
    Typography,  
}                       from "@mui/material"
import CoursesCard      from "../components/CoursesCard"
import { useRouter }    from "next/router"
import en               from '../lang/en'
import es               from '../lang/es'
// END IMPORTS

// COMPONENT
const index = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
        <Box className='courses'>
            <Typography variant='h3'>
                {t.formcourses.courses}
            </Typography>
            <CoursesCard/>
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