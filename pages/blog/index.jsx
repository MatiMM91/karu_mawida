import { 
    Box, 
}                       from "@mui/material"
import blogs            from "../helper/blogs.json"
import NewsBlogsItem    from '../components/home/NewsBlogsItem'


const index = ({themeMode, changeTheme}) => {
    return (
    <>
        <Box className='blog'>
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
                padding:            0 60px;
                padding-top:        100px;
                padding-bottom:     15px;
            }

            @media only screen and (min-width: 920px) {
                .blog {
                    width: 50%;
                }
            }
        `}</style>
    </>
    )
}

export default index