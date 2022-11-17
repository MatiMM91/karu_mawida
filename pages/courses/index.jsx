import { 
    Box, 
    Typography,  
}                       from "@mui/material"
import CoursesCard      from "../components/courses/CoursesCard"
import axios            from "axios"
import Banner           from "../components/home/Banner"

const index = ({courses}) => {
    return (<>
    <Banner/>
    <Box className='courses'>
        <Typography variant='h3'>
            Cursos
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
    </>)
}
export default index

export const getServerSideProps = async (context) => {
    const { data: courses} = await axios.get("http://localhost:3000/api/courses")
    return {
        props: {
            courses,
        }
    }
}