import { Box }      from "@mui/material"
import Image        from "next/image"
import Link         from "next/link"

const LogoNav = ({themeMode, changeTheme}) => {
    return (<>
    <Link href='/'>
        <a>
        {
        themeMode === false ?
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image src='/images/karumawidalogo.png' alt='Logo' width={60} height={50}/>
                <Image src='/images/nombrelogo.png' alt='Nombre' width={140} height={30}/>   
            </Box>  
        :
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image src='/images/logoclaro.png' alt='Logo' width={60} height={50}/>
                <Image src='/images/nombrelogoclaro.png' alt='Nombre' width={140} height={30}/>
            </Box>  
        }
        </a>
    </Link>
    </>)
}

export default LogoNav