// IMPORTS
import { 
    Box, 
    Typography,
}                       from "@mui/material"
import LoginForm        from "../components/LoginForm"
import { useRouter }    from "next/router"
import en               from '../lang/en'
import es               from '../lang/es'
// END IMPORTS

// COMPONENT
const index = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
        <Box className='login'>
            <Typography variant='h3'>
                {t.login.title}
            </Typography>
            <LoginForm/>
        </Box>
        <style jsx global>{`
            .login {
                height:         100vh;
                padding:        0 400px;
                padding-top:    250px;
                text-align:     center;
            }
            
            @media only screen and (max-width: 1024px) {
                .login {
                    padding-left:   160px;  
                    padding-right:  160px;  
                }
            }

            @media only screen and (max-width: 425px) {
                .login {
                    padding-left:   60px;  
                    padding-right:  60px;  
                }
            }
        `}</style>
    </>
    )
}
export default index
// END COMPONENT