// IMPORTS
import { 
    Box,
    Button,
    Stack, 
    Typography,
}                       from "@mui/material"
import { useRouter }    from "next/router"
import { useState }     from "react"
import AddSpecies       from "../components/AddSpecies"
import SpeciesTable     from "../components/SpeciesTable"
import en               from '../lang/en'
import es               from '../lang/es'
// END IMPORTS

// COMPONENT
const index = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    const [open, setOpen] = useState(false)
    
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
    <>
        <Box className='speciesmaintainers'>
            <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Typography variant='h3'>{t.formspecies.title}</Typography>
                <Button onClick={handleOpen} sx={{fontWeight: 'bold'}}>
                    {
                        open ?
                        t.formspecies.species
                        :
                        t.formspecies.add
                    }
                </Button>
            </Stack>
            {
                open ?
                    <AddSpecies/>
                :
                    <SpeciesTable/>
            }
        </Box>
        <style jsx global>{`
            .speciesmaintainers {
                min-height:     100vh;
                padding:        0 60px;
                padding-top:    100px;
                padding-bottom: 40px;

            }
        `}</style>
    </>
    )
}

export default index
// END COMPONENT