// IMPORTS
import { 
    Box,
    Grid,  
    Typography, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
// END IMPORTS

// COMPONENT
const MissioVision = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
    <Box className="aboutus" >
        <Typography variant='h4' color='primary'>
            {t.about.missionvision}
        </Typography>
        <Grid container spacing={2}>
            <Grid item sm={12} md={6} className="missionvision">
                <Typography variant='body'>
                    {t.about.mission}
                </Typography>
            </Grid>
            <Grid item sm={12} md={6} className="missionvision">
                <Typography variant='body'>
                    {t.about.vision}
                </Typography>
            </Grid>
        </Grid>
    </Box>
    <style jsx global>{`
        .aboutus {
            margin: 60px 0;
        }
        
        .missionvision {
            margin-top: 12px;
        }
    `}</style>
    </>
    )
}
export default MissioVision
// END COMPONENT