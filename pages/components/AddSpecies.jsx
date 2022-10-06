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
const AddSpecies = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
        <Box component='form' className='form'>
            <FormControl>
                <TextField className='inputs' variant='standard' label={t.formspecies.name}/>
                <TextField className='inputs' variant='standard' label={t.formspecies.category}/>
                <TextField className='inputs' variant='standard' label={t.formspecies.scientificname}/>
                <TextField className='inputs' variant='standard' label={t.formspecies.origin}/>
                <TextField className='inputs' variant='standard' label={t.formspecies.habitat}/>
                <TextField className='inputs' variant='standard' label={t.formspecies.classification}/>
                <TextField className='inputs' variant='standard' label={t.formspecies.information} multiline/>
                <Button variant="contained" className='inputs'>{t.formspecies.add}</Button>
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

export default AddSpecies
// END COMPONENT