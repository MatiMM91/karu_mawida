import { 
    Box, 
    Typography 
}                       from "@mui/material"
import Library          from "../components/library/Library"
import axios            from "axios"
import Banner           from '../components/home/Banner'
import Footer           from '../components/Footer'

const index = ({themeMode, changeTheme, species}) => {
    return (<>
    <Banner/>
    <Box className='library'>
        <Typography variant='h4' color='primary'>
            Biblioteca
        </Typography>
        {
        species.map( spc => (
            <Library spc={spc} key={spc.id}/>
        ))   
        }
    </Box>
    <Footer
        themeMode={themeMode}
        changeTheme={changeTheme}  
    />
    <style jsx global>{`
        .library {
            min-height:     100vh;
            padding:        60px;
        }
    `}</style>
    </>)
}

export const getServerSideProps = async (context) => {
    const { data: species } = await axios.get("http://localhost:3000/api/species")
    return {
        props: {
            species,
        }
    }
}

export default index