import { Box }  from "@mui/material"
import Image    from "next/image"

const LogoNav = ({themeMode, changeTheme}) => {
    return (<>
    {
    themeMode === false ?
        <Box className='imglogo'><Image src='/images/karumawidalogo.png' alt='Logo' width={60} height={50}/></Box>
    :
        <Box className='imglogo'><Image src='/images/logoclaro.png' alt='Logo' width={60} height={50}/></Box>  
    }
    {
    themeMode === false ?
        <Box className='imglogo'><Image className='imglogo' src='/images/nombrelogo.png' alt='Nombre' width={140} height={30}/></Box>
    :
        <Box className='imglogo'><Image className='imglogo' src='/images/nombrelogoclaro.png' alt='Nombre' width={140} height={30}/></Box>
    }
    <style jsx global>{`
        .imglogo {
            color: #${themeMode  ? 'ddd' : '555'};
        }
    `}</style>
    </>)
}

export default LogoNav