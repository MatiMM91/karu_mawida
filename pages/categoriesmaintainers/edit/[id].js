import { 
    Box, 
    Stack, 
    Typography 
}                       from '@mui/material'
import AddCategories    from '../../components/categories/AddCategories'

const editcategory = () => {
    return (<>
    <Box className='categoriesmaintainers'>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            <Typography variant='h3'>
                Editar Categoría
            </Typography>
        </Stack>
        <AddCategories/>
    </Box>
    <style jsx global>{`
        .categoriesmaintainers {
            min-height:     80vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 40px;

        }
    `}</style>
    </>)
}
export default editcategory