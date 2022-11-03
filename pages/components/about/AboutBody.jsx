// IMPORTS
import { 
    Grid, 
    Typography, 
}                       from '@mui/material'
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
// ENDIMPORTS
// COMPONENT
const AboutBody = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
    <Grid container className='aboutbody'>
        <Grid item md={6} className='bodyleft'>
            <Typography variant='body'>
                {t.about.bodyone}
            </Typography>
        </Grid>
        <Grid item md={6} className='bodyright'>
            <Typography variant='body'>
                {t.about.bodytwo}
            </Typography>
        </Grid>
    </Grid>
    <style jsx global>{`
        .aboutbody {
            display: flex;
            justify-content: space-around;
            margin: 60px 0;
            background: linear-gradient(0deg, rgba(46,101,64,1) 34%, rgba(60,133,60,1) 76%);
            color: white;
            border-radius: 60px 60px 60px 60px;
        }

        .bodyleft {
            padding: 30px;
        }
        
        .bodyright {
            padding: 30px;
        }
    `}</style>
    </>
    )
}
export default AboutBody
// COMPONENT