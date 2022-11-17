import { 
    Box, 
    Typography, 
}                           from "@mui/material"
import NewsBlogsItem        from "./NewsBlogsItem"
import blogs                from '../../helper/blogs.json'

const LatestBlogs = ({themeMode, changeTheme}) => {
    return (<>
    <Box sx={{maxWidth:680, padding: '0 15%'}}>
        <Typography variant="h4">
            Últimos Blogs
        </Typography>
        {
            blogs.slice(0,3).map(item => (
                <NewsBlogsItem
                    themeMode={themeMode}
                    changeTheme={changeTheme}
                    key={item.id}
                    item={item}
                />
            ))
        }
    </Box>
    </>)
}
export default LatestBlogs