import { 
    Box, 
    Typography, 
}                       from "@mui/material"
import blogs            from "../helper/blogs.json"
import NewsBlogsItem    from '../components/home/NewsBlogsItem'
import Banner           from '../components/home/Banner'

const index = ({themeMode, changeTheme}) => {
    return (<>
    <Banner/>
    <Box className='blog'>
        <Typography variant='h3'>
            Blog
        </Typography>
        {
            blogs.map(item => (
            <NewsBlogsItem 
                key={item.id} 
                item={item} 
                themeMode={themeMode} 
                changeTheme={changeTheme}
            />
            ))
        }
    </Box>
    <style jsx global>{`
        .blog {
            min-height:         100vh;
            width:              100vw;
            margin: 0 auto;
            padding:            80px 60px;
        }

        @media only screen and (min-width: 920px) {
            .blog {
                width: 50%;
            }
        }
    `}</style>
    </>)
}
export default index