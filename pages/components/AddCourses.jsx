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
const AddCourses = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    
    return (
    <>
        <Box component='form' className='form'>
            <FormControl>
                <TextField className='inputs' variant='standard' label={t.formcourses.course} focus/>
                <TextField className='inputs' variant='standard' label={t.formcourses.capacity} focus/>
                <TextField className='inputs' variant='standard' label={t.formcourses.price} focus/>
                <TextField className='inputs' variant='standard' label={t.formcourses.hours} type='time'/>
                <TextField className='inputs' variant='standard' label={t.formcourses.startdate} type='date'/>
                <TextField className='inputs' variant='standard' label={t.formcourses.enddate} type='date'/>
                <TextField className='inputs' variant='standard' label={t.formcourses.icon}/>
                <TextField className='inputs' variant='standard' multiline label={t.formcourses.description}/>
                <Button variant="contained" className='inputs'>{t.formcourses.add}</Button>
            </FormControl>        
        </Box>
        <style jsx global>{`
            .form {
                display:        flex;
                flex-direction: column;
                padding: 0 60px;
            }

            .inputs {
                margin-top:    15px;
            }
        `}</style>
    </>
    )
}
export default AddCourses
// END COMPONENT