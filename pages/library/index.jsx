import { 
    Box, 
    Typography 
}                       from "@mui/material"
import Library          from "../components/library/Library"
import axios            from "axios"
import Banner           from '../components/home/Banner'

const index = ({library}) => {
    return (<>
    <Banner/>
    <Box className='library'>
        <Typography variant='h3'>Biblioteca</Typography>
        <Library library={library}/>
    </Box>
    <style jsx global>{`
        .library {
            min-height:     100vh;
            padding:        0 60px;
            padding-top:    100px;
        }
    `}</style>
    </>)
}

export const getServerSideProps = async (context) => {
    const { data: library } = await axios.get("http://localhost:3000/api/library")
    return {
        props: {
            library,
        }
    }
}

export default index