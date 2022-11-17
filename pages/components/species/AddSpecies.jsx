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
import {toast}          from "react-toastify"
import axios            from "axios"
import { 
    useEffect, 
    useState 
}                       from "react"

const AddSpecies = ({categories}) => {
    const router = useRouter()

    const [species, setSpecies] = useState({
        nombre_especie: "",
        categoria_id: "",
        nombre_cientifico: '',
        origen: '',
        habitat: '',
        informacion_general: '',
    })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (router.query.id) {
                await axios.put('/api/species/' + router.query.id, species)
                toast.success('Species updated successfully')
            } else {
                await axios.post('/api/species', species)
                if (species.categoria_id === undefined || species.categoria_id === null || species.categoria_id === '') {
                    toast.error(error.response.data.message)
                } else {
                    toast.success('Species created successfully')
                }
            }
            router.push('/speciesmaintainers')
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleChange = ({target: {name, value}}) => {
        setSpecies({ ...species, [name]: value})
    }

    useEffect(() => {
        const getSpecies = async () => {
            const {data} = await axios.get('/api/species/' + router.query.id)
            setSpecies(data)
        }

        if (router.query.id) {
            getSpecies(router.query.id)
        }
    }, [])

    return (<>
    <Box component='form' className='form'>
        <FormControl>
            <TextField
                name='nombre_especie'
                className='inputs' 
                variant='standard' 
                label='Nombre'
                value={species.nombre_especie}
                onChange={handleChange}
            />
            <FormControl
                variant='standard' 
                className='inputs' 
            >
                <InputLabel id='category'>Categoría</InputLabel>
                <Select 
                    labelId='category'
                    label='Categoría'
                    id='categoria'
                    name='categoria_id'
                    variant='standard'
                    value={species.categoria_id}
                    onChange={handleChange}
                >
                    {
                        categories.map(category =>(
                            <MenuItem
                                key={category}
                                value={category.id}
                            >
                                {category.categoria}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <TextField 
                name='nombre_cientifico'
                className='inputs' 
                variant='standard' 
                label='Nombre Científico'
                value={species.nombre_cientifico}
                onChange={handleChange}
            />
            <TextField 
                name='origen'
                className='inputs' 
                variant='standard' 
                label='Origen'
                value={species.origen}
                onChange={handleChange}
            />
            <TextField 
                name='habitat'
                className='inputs' 
                variant='standard' 
                label='Hábitat'
                value={species.habitat}
                onChange={handleChange}
            />
            <TextField 
                name='informacion_general'
                className='inputs' 
                variant='standard' 
                label='Información General'
                value={species.informacion_general}
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
export default AddSpecies