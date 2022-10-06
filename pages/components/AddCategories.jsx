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
const AddCategories = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
        <Box component='form' className='form'>
            <FormControl>
                <TextField className='inputs' variant='standard' label={t.formcategories.category}/>
                <TextField className='inputs' variant='standard' label={t.formcategories.classification}/>
                <TextField className='inputs' variant='standard' label={t.formcategories.description} multiline/>
                <Button variant="contained" className='inputs'>{t.formcategories.add}</Button>
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
export default AddCategories
// END COMPONENT