import { 
    Box, 
    Typography, 
}                       from "@mui/material"
import Image            from "next/image"

const Banner = () => {
    return (<>
    <Box className='bannerbox'>
        <Image 
            src='/images/Banner.jpeg' 
            alt='Karu img'
            layout='fill'
            className='bannerimg'
            priority
        />
        <Box className='bannertitle'>
            <Typography variant='h3'>
                Valdivia, Cultura y Naturaleza
            </Typography>
            <Typography variant='body'>
                “Conservación es un estado de armonía entre el hombre y la tierra” Aldo Leopold.
            </Typography>
        </Box>
    </Box>
    <style jsx global>{`
        .bannerbox {
            height:                 380px;
            position:               relative;
            margin-top:             64px;
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
    </>)
}
export default Banner