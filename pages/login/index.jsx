import { Box }          from "@mui/material"
import LoginForm        from "../components/LoginForm"
import Banner           from '../components/home/Banner'
import Footer           from '../components/Footer'

const index = ({themeMode, changeTheme}) => {
    return (<>
        <Banner/>
        <Box className='login'>
            <LoginForm/>
        </Box>
        <Footer
            themeMode={themeMode}
            changeTheme={changeTheme}   
        />
        <style jsx global>{`
            .login {
                min-height:         30vh;
                text-align:     center;
            }
        `}</style>
    </>)
}
export default index