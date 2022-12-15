import { 
    Box,
    Grid, 
    Typography 
}                       from "@mui/material"
import NewsCards        from "./components/home/NewsCards"
import axios            from "axios"
import Banner           from './components/home/Banner'
import Footer           from './components/Footer'
import fs               from 'fs'
import path             from 'path'
import matter           from 'gray-matter'
import NewsBlogsItem    from "./components/home/NewsBlogsItem"
import AboutLead        from "./components/about/AboutLead"
import SectorsList      from "./components/about/SectorsList"
import AboutBody        from "./components/about/AboutBody"

const Home = ({themeMode, changeTheme, species, courses, posts}) => {
    return (<>
    <Banner/>
    <Box className='headhome'>
        <AboutLead/>
        <SectorsList/>
    </Box>
    <Box className='headhome'>
        <AboutBody/>
    </Box>
    <Box className='headhome'>
        <Grid container className='news'>
            <Grid item sm={12} xl={6}>
                <Typography variant="h4" color='primary'>
                    Últimos Blogs
                </Typography>
                {
                posts.slice(0,3).map(post => (
                    <NewsBlogsItem
                        themeMode={themeMode}
                        changeTheme={changeTheme}
                        key={post.slug}
                        post={post}
                    />
                ))
                }
            </Grid>
            <Grid item sm={12} xl={3}>
                <NewsCards
                    themeMode={themeMode}
                    changeTheme={changeTheme}
                    courses={courses}
                    species={species}
                />
            </Grid>
        </Grid>
    </Box>
    <Footer
        themeMode={themeMode}
        changeTheme={changeTheme}
    />
    <style jsx global>{`
        .news {
            min-height:         80vh;
            display:            flex;
            justify-content:    space-around;
            align-item:         space-between;
        }

        .headhome {
            padding: 5%;
            padding-bottom: 0;
        }
    `}</style>    
    </>)
}
export default Home

export const getServerSideProps = async (context) => {
    const { data: species } = await axios.get("http://localhost:3000/api/species")
    const { data: courses } = await axios.get("http://localhost:3000/api/courses")

    const files = fs.readdirSync( path.join('posts') )

    const posts = files.map( filename => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync( path.join('posts', filename))
        const {data:frontmatter} = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            courses,
            species,
            posts
        }
    }
}