// IMPORTS
import { 
    Box, 
    Typography, 
}                           from "@mui/material"
import { useRouter }        from "next/router"
import en                   from '../../lang/en'
import es                   from '../../lang/es'
import NewsBlogsItem        from "./NewsBlogsItem"
import blogs                from '../../helper/blogs.json'
// END IMPORTS
// COMPONENT
const LatestBlogs = ({themeMode, changeTheme}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    return (
    <>
        <Box sx={{maxWidth:800, marginTop:4}}>
            <Typography variant="h4">
                {t.blog.title}
            </Typography>
            {
                blogs.map(item => (
                    <NewsBlogsItem
                        themeMode={themeMode}
                        changeTheme={changeTheme}
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </Box>
    </>
    )
}
export default LatestBlogs
// END COMPONENT
