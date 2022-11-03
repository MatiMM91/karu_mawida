// IMPORTS
import { 
    Box, 
    Grid,
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
import NewsCoursesCard  from "./NewsCoursesCard"
import NewsLibraryCard  from "./NewsLibraryCard"
// END IMPORTS
// COMPONENT
const NewsCards = ({themeMode, changeTheme}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    return (
    <>
        <Box>
            <Grid container spacing={2} className='newscards'>
                <Grid item xs={6} className='news'>
                    <NewsLibraryCard
                        themeMode={themeMode}
                        changeTheme={changeTheme}
                    />
                </Grid>
                <Grid item xs={6} className='news'>    
                    <NewsCoursesCard
                        themeMode={themeMode}
                        changeTheme={changeTheme}
                    />
                </Grid>
            </Grid>
        </Box>
        <style jsx global>{`
            .newscards {  
                margin-top: 18px;
            }
            
            .news {
                display: flex;
                flex-diretion: row;
                justify-content: space-around;
                align-items: center;
            }
        `}</style>    
    </>
    )
}
export default NewsCards
// END COMPONENT