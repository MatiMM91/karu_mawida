import { Box }          from "@mui/material"
import NewsCoursesCard  from "./NewsCoursesCard"
import NewsLibraryCard  from "./NewsLibraryCard"

const NewsCards = ({themeMode, changeTheme, species, courses}) => {
    return (<>
    <Box className='newscards'>
    {
    species.slice(-1).map(spc => (   
        <NewsLibraryCard
            themeMode={themeMode}
            changeTheme={changeTheme}
            key={spc.id}   
            spc={spc}
        />
    ))
    }
    {
    courses.slice(-1).map(course => (
        <NewsCoursesCard
            themeMode={themeMode}
            changeTheme={changeTheme}
            key={course.id}
            course={course}
        />
    ))
    }
    </Box>
    <style jsx global>{`
        .newscards {
            padding-top:        25px;
            margin-left:        60px;
            display:            flex;
            flex-direction:     column;
            justify-content:    center;
            align-item:         center;
        }
        
        @media only screen and (min-width: 768px) and (max-width: 1535px) {
            .newscards {
                flex-direction:     row;
                justify-content:    space-around;
                margin-left:        0;
            }
        }
    `}</style>    
    </>)
}
export default NewsCards