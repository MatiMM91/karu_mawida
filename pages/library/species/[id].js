import { 
    Box, 
    Typography 
}                       from "@mui/material"
import axios            from "axios"
import { useRouter }    from "next/router"
import { useState }     from "react"
import Footer           from "../../components/Footer"

const species = ({themeMode, changeTheme}) => {
    const router = useRouter()

    const [species, setSpecies] = useState({
        nombre_especie: '',
        categoria: '',
        clasificacion: '',
        nombre_cientifico: '',
        origen: '',
        habitat: '',
        informacion_general: '',
    })

    const getSpecies = async () => {
        const {data} = await axios.get('/api/species/' + router.query.id)
        setSpecies(data)
    }
    
    getSpecies(router.query.id)

    return (<>
    <Box className='species'>
        <Typography variant='h3'>
            {species.nombre_especie}
        </Typography>
        <Typography variant='h6'>
            Categoría: {species.categoria}
        </Typography>
        <Typography variant='h6'>
            Clasificación: {species.clasificacion}
        </Typography>
        <Typography variant='h6'>
            N Científico: {species.nombre_cientifico}
        </Typography>
        <Typography variant='h6'>
            Origen: {species.origen}
        </Typography>
        <Typography variant='h6'>
            Hábitat: {species.habitat}
        </Typography>
        <Typography variant='h6'>
            Información General: {species.informacion_general}
        </Typography>
    </Box>
    <Footer
        themeMode={themeMode}
        changeTheme={changeTheme}   
    />
    <style jsx global>{`
        .species {
            min-height:     80vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 40px;
        }
    `}</style>
    </>)
}

export default species