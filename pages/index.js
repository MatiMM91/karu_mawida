// IMPORTS
import { 
    Box, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from './lang/en'
import es               from './lang/es'
import Banner           from "./components/home/Banner"
import NewsCards        from "./components/home/NewsCards"
import LatestBlogs      from "./components/home/LatestBlogs"
import Image            from "next/image"
import Carousel         from 'react-material-ui-carousel'
// END IMPORTS

// COMPONENT
export default function Home({themeMode, changeTheme}) {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    const imgsBanner = [
        {
            id: 1,
            img: '/images/Banner.jpeg',
        },
        {
            id: 2,
            img: '/images/KarumawidaImg.jpg',
        },
        {
            id: 3,
            img: '/images/KaruOtono.jpg',
        },
    ]

    return (
    <>
        <Box className='home'>
            <Carousel animation='slide' navButtonsAlwaysInvisible={true}>
                {
                    imgsBanner.map(item => <Banner key={item.id} item={item}/>)    
                }
            </Carousel>
            <NewsCards
                themeMode={themeMode}
                changeTheme={changeTheme}
            />
            <LatestBlogs
                themeMode={themeMode}
                changeTheme={changeTheme}
            />
        </Box>
        <style jsx global>{`
            .home {
                min-height:     100vh;
                padding:        0 60px;
                padding-top:    100px;
            }
        `}</style>    
    </>
    )
}
// END COMPONENT