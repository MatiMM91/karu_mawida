// IMPORTS
import { 
    Box, 
    Typography 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
// END IMPORTS
// COMPONENT
const AboutLead = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
    <Box className='lead'>
        <Typography variant='h4' color='primary'>
            {t.about.subtitle}
        </Typography>
        <Box className='leadtext'>
            <Typography variant='body' className='lead'>
                {t.about.leaduno}
            </Typography>
            <Typography variant='body'>
                {t.about.leaddos}
            </Typography>
        </Box>
    </Box>
    <style jsx global>{`
        .lead {
            margin: 60px 0;
        }

        .leadtext {
            margin-top: 15px;
        }
    `}</style>
    </>
    )
}   
export default AboutLead
// COMPONENT