// IMPORTS
import { 
    Box, 
    Button, 
    FormControl, 
    TextField, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../lang/en'
import es               from '../lang/es'
// END IMPORTS

// COMPONENT
const LoginForm = ({handleLogin}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    return (
    <>
        <Box component='form' className="form">
            <FormControl>
                <TextField label="Email" variant="standard" className="inputs"/>
                <TextField 
                    label="Password" 
                    type="password"
                    autoComplete="current-password"
                    variant="standard" 
                    className="inputs"
                />
                <Button className="inputs" onClick={handleLogin}>{t.login.access}</Button>
            </FormControl>
        </Box>
        <style jsx global>{`
            .form {
                display:        flex;
                flex-direction: column;
            }

            .inputs {
                margin-top:    20px;
            }
        `}</style>     
    </>
    )
}
export default LoginForm
// END COMPONENT