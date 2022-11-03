// IMPORTS
import { 
    Box, 
    Stack, 
    Typography 
}                       from '@mui/material'
import AddCourses       from '../../components/courses/AddCourses'
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
// END IMPORTS
// COMPONENT
const editcourse = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    return (
    <>
    <Box className='coursesmaintainers'>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            <Typography variant='h3'>
                {t.formcourses.title}
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
// END COMPONENT