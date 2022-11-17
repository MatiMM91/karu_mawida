import { Box }          from "@mui/material"
import LoginForm        from "../components/LoginForm"
import Banner           from '../components/home/Banner'

const index = () => {
    return (<>
        <Banner/>
        <Box className='login'>
            <LoginForm/>
        </Box>
        <style jsx global>{`
            .login {
                min-height:         30vh;
                text-align:     center;
            }
        `}</style>
    </>)
}
export default index