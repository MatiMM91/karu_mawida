import { 
    Box, 
    Typography,  
}                       from "@mui/material"
import CoursesCard      from "../components/courses/CoursesCard"
import axios            from "axios"
import Banner           from "../components/home/Banner"
import Footer           from '../components/Footer'

const index = ({themeMode, changeTheme, courses}) => {
    return (<>
    <Banner/>
    <Box className='courses'>
        <Typography variant='h4' color='primary'>
            Cursos
        </Typography>
        <CoursesCard courses={courses}/>
    </Box>
    <Footer
        themeMode={themeMode}
        changeTheme={changeTheme}  
    />
    <style jsx global>{`
        .courses {
            min-height:     100vh;
            padding:        60px;
        }
    `}</style>
    </>)
}
export default index

export const getServerSideProps = async (context) => {
    const { data: courses} = await axios.get("http://localhost:3000/api/activecourses")

    return {
        props: {
            courses,
        }
    }
}