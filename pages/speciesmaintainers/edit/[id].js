import { 
    Box, 
    Stack, 
    Typography 
}                       from '@mui/material'
import AddSpecies       from '../../components/species/AddSpecies'
import axios            from 'axios'

const editspecies = ({categories}) => {
    return (<>
    <Box className='speciesmaintainers'>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            <Typography variant='h3'>
                Editar Especie
            </Typography>
        </Stack>
        <AddSpecies
            categories={categories}
        />
    </Box>
    <style jsx global>{`
        .speciesmaintainers {
            min-height:     80vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 40px;

        }
    `}</style>
    </>)
}

export const getServerSideProps = async (context) => {
    const { data: categories} = await axios.get("http://localhost:3000/api/categories")
    return {
        props: {
            categories,
        }
    }
}
export default editspecies