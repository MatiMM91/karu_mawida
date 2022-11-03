// IMPORTS
import { 
    Box, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../lang/en'
import es               from '../lang/es'
import MissionVision    from "../components/about/MissionVision"
import SectorsList      from "../components/about/SectorsList"
import AboutLead        from "../components/about/AboutLead"
import AboutBody        from "../components/about/AboutBody"
import AboutBanner      from "../components/about/AboutBanner"
// END IMPORTS
// COMPONENT
const index = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
    <Box className='about'>
        <AboutBanner/>
        <AboutLead/>
        <SectorsList/>
        <AboutBody/>
        <MissionVision/>
    </Box>
    <style jsx global>{`
        .about {
            min-height:     84vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 30px;
        }
    `}</style>
    </>
    )
}
export default index
// END COMPONENT