import { 
    Box,
    Button,
    Stack, 
    Typography,
}                       from "@mui/material"
import axios            from "axios"
import { useState }     from "react"
import AddCategories    from "../components/categories/AddCategories"
import CategoriesTable  from "../components/categories/CategoriesTable"
import { authOptions }  from "../api/auth/[...nextauth]"
import { 
    unstable_getServerSession 
}                       from "next-auth"

const index = ({categories}) => {
    const [open, setOpen] = useState(false)
 
    const handleOpen = () => {
        setOpen(!open)
    }

    return (<>
    <Box className='categoriesmaintainers'>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{display: 'flex', justifyContent: 'space-between'}}
        >
            <Typography variant='h4' color='primary'>Mantenedor de Categorías</Typography>
            <Button variant='outlined' onClick={handleOpen} sx={{fontWeight: 'bold'}}>
                {
                    open ?
                        'Ver Categorías'
                    :
                        'Agregar Categoría'
                }
            </Button>
        </Stack>
        {
            open ?
                <AddCategories/>
            : 
                <CategoriesTable
                    categories={categories}
                />
        }
    </Box>
    <style jsx global>{`
        .categoriesmaintainers {
            min-height:     100vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 40px;

        }
    `}</style>
    </>)
}

export const getServerSideProps = async (context) => {
    const { data: categories} = await axios.get("http://localhost:3000/api/categories")
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }        
    }

    return {
        props: {
            categories,
        }
    }
}
export default index