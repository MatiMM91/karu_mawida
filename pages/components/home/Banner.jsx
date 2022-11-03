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
const Banner = ({item}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    return (
    <>
        <Box className='bannerbox'>
            <Image 
                src={item.img} 
                alt='Karu img'
                layout='fill'
                className='bannerimg'
            />
            <Box className='bannertitle'>
                <Typography variant='h3'>
                    {t.home.title}
                </Typography>
                <Typography variant='body'>
                    {t.home.subtitle}
                </Typography>
            </Box>
        </Box>
        <style jsx global>{`
            .bannerbox {
                height:                 380px;
                position:               relative;
            }
            
            .bannerimg {
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
export default Banner
// END COMPONENT