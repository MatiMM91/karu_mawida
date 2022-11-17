import { 
    Box, 
    Stack, 
    Typography 
}                       from '@mui/material'
import AddCourses       from '../../components/courses/AddCourses'

const editcourse = () => {
    return (<>
    <Box className='coursesmaintainers'>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            <Typography variant='h3'>
                Editar Curso
            </Typography>
        </Stack>
        <AddCourses/>
    </Box>
    <style jsx global>{`
        .coursesmaintainers {
            min-height:     80vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 40px;

        }
    `}</style>
    </>
  )
}
export default editcourse