import { 
    Alert,
    Box, 
    Button, 
    Card, 
    CardContent, 
    FormControl, 
    TextField,
    Typography, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import { useState }     from "react"
import {signIn }        from "next-auth/react"

const LoginForm = () => {
    const router = useRouter()

    const [user, setUser] = useState({
        email: '',
        password: '',    
    })

    const [pageState, setPageState] = useState({
        error: '',
        processing: false,
    })

    const simplifyError = (error) => {
        const errorMap = {
            'CredentialsSignin': 'Correo o contraseña invalido'
        }
        return errorMap[error] ?? "Ocurrió un error desconocido"
    }

    const handleSubmit = async () => {
        setPageState(old => ({...old, processing:true, error: ''}))

        signIn('credentials', {
            ...user,
            redirect: false,
        }).then(response => {
            if (response.ok) {
                router.push('/coursesmaintainers')
            } else {
                setPageState(old => ({...old, processing:false, error: response.error}))
            }
        }).catch(error => {
            setPageState(old => ({...old, processing:false, error: error.message ?? "Algo salió mal!"}))
        })
    }

    const handleChange = ({target: {name, value}}) => {
        setUser(old => ({ ...old, [name]: value}))
    }

    return (<>
    <Box component='form' className="form">
        <Card>
            <CardContent>
                {
                    pageState.error !== '' && <Alert severity='error' sx={{margin:'25px 0'}}>{simplifyError(pageState.error)}</Alert>
                }
                <Typography variant='h3' color='primary'>
                    Iniciar Sesión
                </Typography>
                <FormControl>
                    <TextField 
                        label="Correo"
                        name='email'
                        variant="standard" 
                        className="inputs"
                        onChange={handleChange}
                        value={user.email}
                    />
                    <TextField 
                        label="Contraseña" 
                        name='password'
                        type="password"
                        variant="standard" 
                        className="inputs"
                        onChange={handleChange}
                        value={user.password}
                    />
                    <Button 
                        className="inputs"
                        variant='outlined'
                        disabled={pageState.processing}
                        onClick={handleSubmit}
                    >
                        Acceder
                    </Button>
                </FormControl>
            </CardContent>
        </Card>
    </Box>
    <style jsx global>{`
        .form {
            display:        flex;
            flex-direction: column;
        }

        .inputs {
            width: 300px;
            margin-top:    20px;
        }
    `}</style>     
    </>)
}
export default LoginForm