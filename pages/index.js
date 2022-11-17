import { 
    Grid, 
}                       from "@mui/material"
import NewsCards        from "./components/home/NewsCards"
import LatestBlogs      from "./components/home/LatestBlogs"
import axios            from "axios"
import Banner           from './components/home/Banner'

const Home = ({themeMode, changeTheme, species, courses}) => {
    return (<>
    <Banner/>
    <Grid container className='home'>
        <Grid item xs={12} sm={12} md={6}>    
            <LatestBlogs
                themeMode={themeMode}
                changeTheme={changeTheme}
            />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <NewsCards
                themeMode={themeMode}
                changeTheme={changeTheme}
                courses={courses}
                species={species}
            />
        </Grid>
    </Grid>
    <style jsx global>{`
        .home {
            min-height:     80vh;
            padding-top:    80px;
        }
    `}</style>    
    </>)
}
export default Home

export const getServerSideProps = async (context) => {
    const { data: species } = await axios.get("http://localhost:3000/api/species")
    const { data: courses } = await axios.get("http://localhost:3000/api/courses")
    return {
        props: {
            courses,
            species,
        }
    }
}