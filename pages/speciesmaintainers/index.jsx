import { 
    Box,
    Button,
    Stack, 
    Typography,
}                       from "@mui/material"
import { useState }     from "react"
import AddSpecies       from "../components/species/AddSpecies"
import SpeciesTable     from "../components/species/SpeciesTable"
import axios            from 'axios'
import { 
    unstable_getServerSession 
}                       from "next-auth"
import { authOptions }  from "../api/auth/[...nextauth]"

const index = ({species, categories}) => {
    // const { data: session } = useSession({
    //     required: true
    // })

    const [open, setOpen] = useState(false)
    
    const handleOpen = () => {
        setOpen(!open)
    }

    return (<>
    <Box className='speciesmaintainers'>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
        >
            <Typography variant='h3'>Mantenedor de Especies</Typography>
            <Button onClick={handleOpen} sx={{fontWeight: 'bold'}}>
                {
                    open ?
                        'Especies'
                    :
                        'Agregar Especie'
                }
            </Button>
        </Stack>
        {
            open ?
                <AddSpecies
                    categories={categories}
                />
            :
                <SpeciesTable
                    species={species}
                />
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
    </>)
}

export const getServerSideProps = async (context) => {
    const { data: species} = await axios.get("http://localhost:3000/api/species")
    const { data: categories} = await axios.get("http://localhost:3000/api/categories")
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            }
        }        
    }

    return {
        props: {
            species,
            categories,
        }
    }
}
export default index