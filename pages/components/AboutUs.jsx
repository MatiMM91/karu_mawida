// IMPORTS
import { 
    Grid, 
    Typography, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import Image            from 'next/image'
import en               from '../lang/en'
import es               from '../lang/es'
// END IMPORTS

// COMPONENT
const AboutUs = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
        <Grid container className="aboutus" spacing={2}>
            <Grid item md={2}>
                <Image 
                    src='/images/karuLogo.png' 
                    alt='Karu img' 
                    width={180} 
                    height={180}
                    sx={{margin: '0px 10px'}}
                />
            </Grid>
            <Grid item sm={10}>
                <Typography variant='body2'>
                    {t.about.bodyuno}
                </Typography>
                <Typography variant='body2'>
                    {t.about.bodydos}
                </Typography>
                <Typography variant='body2'>
                    {t.about.bodytres}
                </Typography>
            </Grid>
        </Grid>
        <Typography variant='h4'>
            {t.about.missionvision}
        </Typography>
        <Typography variant='body2' className="missionvision">
            {t.about.vision}
        </Typography>
        <Typography variant='body2' className="missionvision">
            {t.about.mission}
        </Typography>
        <style jsx global>{`
            .aboutus {
                padding: 20px 0;
            }

            .missionvision {
                padding-top: 15px;
            }
        `}</style>
    </>
    )
}

export default AboutUs
// END COMPONENT