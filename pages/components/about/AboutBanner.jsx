// IMPORTS
import { 
    Box, 
    Typography, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import Image            from "next/image"
import en               from '../../lang/en'
import es               from '../../lang/es'
// END IMPORTS
// COMPONENT
const AboutBanner = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    return (
    <>
    <Box className='aboutbanner'>
        <Image 
            src='/images/KaruMawidaImg.jpg' 
            alt='Karu img'
            layout='fill'
            className='bannerimg'
        />
        <Box className='bannertitle'>
            <Typography variant='h3'>
                {t.about.title}
            </Typography>
        </Box>
    </Box>
    <style jsx global>{`
        .aboutbanner {
            height:                 380px;
            position:               relative;

        }
        
        .bannerimg {
            background-size:        cover;
            background-repeat:      no-repeat;
            background-attachment:  fixed;
            background-position:    center
            background:             rgba(0, 0, 0, 0.1);
        }
        
        .bannertitle {
            background-color:       rgba(0, 0, 0, 0.4);
            color:                  #fff;
            position:               absolute;
            top:                    45%;
            width:                  100%;
            padding-left:           15px;
        }
    `}</style>
    </>
    )
}
export default AboutBanner
// END COMPONENT