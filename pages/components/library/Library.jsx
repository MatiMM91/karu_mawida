import { 
    Card, 
    CardContent, 
    Typography 
}                       from "@mui/material"

const Library = ({library}) => {
    return (<>
    {
    library.map( lib => (
    <Card key={library.id} className='librarycard'>
        <CardContent>
            <Typography variant="h5">{lib.nombre_especie}</Typography>
            <Typography>{lib.nombre_cientifico}</Typography>
            <Typography>{lib.origen}</Typography>
            <Typography>{lib.habitat}</Typography>
            <Typography>{lib.informacion_general}</Typography>
            <Typography>{lib.categoria}</Typography>
            <Typography>{lib.clasificacion}</Typography>
        </CardContent>
    </Card>
    ))    
    }
    <style jsx global>{`
        .librarycard {
            margin: 20px 0;
        }
    `}</style>
    </>)
}
export default Library