import { Grid }         from "@mui/material"
import NewsCoursesCard  from "./NewsCoursesCard"
import NewsLibraryCard  from "./NewsLibraryCard"

const NewsCards = ({themeMode, changeTheme, species, courses}) => {
    return (<>
    <Grid container spacing={4} className='news'>
        <Grid item xs={12} className='newscards'>
            <NewsLibraryCard
                themeMode={themeMode}
                changeTheme={changeTheme}
                species={species}   
            />
        </Grid>
        <Grid item xs={12} className='newscards'>    
            <NewsCoursesCard
                themeMode={themeMode}
                changeTheme={changeTheme}
                courses={courses}
            />
        </Grid>
    </Grid>
    <style jsx global>{`
        .newscards {
            display: flex;
            flex-diretion: row;
            justify-content: space-around;
            align-items: center;
        }

        @media only screen and (max-width: 900px) {
            .news {
                margin: 25px 0;
            }
        }
    `}</style>    
    </>)
}
export default NewsCards