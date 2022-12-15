import { 
    Box, 
    Grid, 
    Typography, 
}                       from "@mui/material"
import NewsBlogsItem    from '../components/home/NewsBlogsItem'
import Banner           from '../components/home/Banner'
import Footer           from '../components/Footer'
import path             from 'path'
import fs               from 'fs'
import matter           from 'gray-matter'

const index = ({themeMode, changeTheme, posts}) => {
    return (<>
    <Banner/>
    <Box className='blog'>
        <Typography variant='h4' color='primary'>
            Blog
        </Typography>
        <Grid container spacing={2} className='gridblog'>
        {
            posts.map( post => (
            <Grid item sm={12} xl={6} key={post.slug}>    
                <NewsBlogsItem  
                    post={post} 
                    themeMode={themeMode} 
                    changeTheme={changeTheme}
                />
            </Grid>
            ))
        }
        </Grid>
    </Box>
    <Footer
        themeMode={themeMode}
        changeTheme={changeTheme}  
    />
    <style jsx global>{`
        .blog {
            min-height:         80vh;
            margin:             40px;
        }

        .gridblog {
            padding-top: 15px;
        }
    `}</style>
    </>)
}
export default index

export const getServerSideProps = async (context) => {
    const files = fs.readdirSync( path.join('posts') )

    const posts = files.map( filename => {
        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync( path.join('posts', filename), 'utf-8' )

        const {data:frontmatter} = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })


    return {
        props: {
            posts,
        }
    }
}