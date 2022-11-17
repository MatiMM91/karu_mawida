import { 
    Box, 
    Typography, 
}                       from "@mui/material"
import MissionVision    from "../components/about/MissionVision"
import SectorsList      from "../components/about/SectorsList"
import AboutLead        from "../components/about/AboutLead"
import AboutBody        from "../components/about/AboutBody"
import Banner           from '../components/home/Banner'

const index = () => {
    return (<>
    <Banner/>
    <Box className='about'>
        <Typography variant='h3'>
            Acerca de karü Mawida
        </Typography>
        <AboutLead/>
        <SectorsList/>
        <AboutBody/>
        <MissionVision/>
    </Box>
    <style jsx global>{`
        .about {
            min-height:     84vh;
            padding:        0 60px;
            padding-top:    80px;
            padding-bottom: 30px;
        }
    `}</style>
    </>)
}
export default index