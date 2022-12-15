import { 
    Box, 
    Button, 
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
}                       from "@mui/material"
import { useRouter }    from "next/router"
import { 
    useEffect, 
    useState 
}                       from "react"
import {toast}          from "react-toastify"
import axios            from "axios"

const AddCategories = () => {
    const router = useRouter()
    const [category, setCategory] = useState({
        categoria: "",
        clasificacion: "",
        descripcion: '',
    })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (router.query.id) {
                await axios.put('/api/categories/' + router.query.id, category)
                toast.success('Category updated successfully')
            } else {
                await axios.post('/api/categories', category)
                toast.success('Category created successfully')
            }
            router.push('/categoriesmaintainers')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleChange = ({target: {name, value}}) => {
        setCategory({ ...category, [name]: value})
    }

    useEffect(() => {
        const getCategory = async () => {
            const {data} = await axios.get('/api/categories/' + router.query.id)
            setCategory(data)
        }

        if (router.query.id) {
            getCategory(router.query.id)
        }
    }, [])

    return (<>
    <Box component='form' className='form'>
        <FormControl>
            <TextField 
                name='categoria'
                className='inputs' 
                variant='standard' 
                label='Categoría'
                value={category.categoria}
                onChange={handleChange}
            />
            <FormControl 
                className='inputs'
                variant='standard'
            >
                <InputLabel id='clasification'>Clasificación</InputLabel>
                <Select
                    labelId='clasification'
                    label='Clasificación'
                    id='clasificacion'
                    name='clasificacion'
                    value={category.clasificacion}
                    onChange={handleChange}
                >
                    <MenuItem value='flora'>Flora</MenuItem>
                    <MenuItem value='fauna'>Fauna</MenuItem>
                </Select>
            </FormControl>
            <TextField
                name='descripcion' 
                className='inputs' 
                variant='standard' 
                label='Descripción'
                value={category.descripcion}
                onChange={handleChange}
                multiline
            />
            <Button 
                variant="contained" 
                className='inputs' 
                onClick={handleSubmit} 
            >
                {
                router.query.id ?    
                    'Editar'
                :
                    'Agregar'
                }
            </Button>
            {
            router.query.id ?
                <Button
                    variant="contained" 
                    className='inputs'
                    onClick={() => router.back()}
                >
                    Volver    
                </Button>
            :
                null    
            }
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
    </>)
}
export default AddCategories