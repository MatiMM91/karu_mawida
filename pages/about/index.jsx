// IMPORTS
import { 
    Box, 
    Typography,
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../lang/en'
import es               from '../lang/es'
import AboutUs          from "../components/AboutUs"
// END IMPORTS

// COMPONENT
const index = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
        <Box className='about'>
            <Typography variant='h3'>
                {t.about.title}
            </Typography>
            <Box className='lead'>
                <Typography variant='h4'>
                    {t.about.subtitle}
                </Typography>
                <Typography variant='body2'>
                    {t.about.leaduno}
                </Typography>
                <Typography variant='body2'>
                    {t.about.leaddos}
                </Typography>
                <Typography variant='body2'>
                    {t.about.leadtres}
                </Typography>
            </Box>
            <AboutUs/>
        </Box>
        <style jsx global>{`
            .about {
                min-height:     84vh;
                padding:        0 60px;
                padding-top:    100px;
            }

            .lead {
                padding-top: 15px;
            }
        `}</style>
    </>
    )
}

export default index
// END COMPONENT