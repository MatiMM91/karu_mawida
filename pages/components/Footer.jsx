import { 
    Stack, 
    Typography, 
}                   from "@mui/material"
import styles       from "../../styles/Home.module.css"
import Image        from "next/image"

const Footer = ({themeMode, changeTheme}) => {
    return (<>
    <footer className={styles.footer}>
        <Stack
            sx={{
                display:'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-around', 
                alignItems: 'center',
            }}
        >
            <Image src="/images/karuLogo.png" alt="Karu Logo" width={80} height={80} />
            {
                themeMode ?
                <Image src='/images/nombrelogoclaro.png' alt='Nombre' width={140} height={30}/>
                :
                <Image src='/images/nombrelogo.png' alt='Nombre' width={140} height={30}/>
            }
            <Typography variant='body2' sx={{paddingTop:4}}>
                Desarrollado por IBCode
            </Typography>
        </Stack>
    </footer>
    </>)
}    
export default Footer