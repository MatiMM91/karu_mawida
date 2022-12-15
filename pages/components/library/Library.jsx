import { 
    Card, 
    CardActionArea, 
    CardContent, 
    Typography 
}                       from "@mui/material"
import { useRouter }    from "next/router"

const Library = ({spc}) => {
    const router = useRouter()
    return (<>
    <Card className='librarycard'>
        <CardActionArea
            onClick={() => router.push('/library/species/' + spc.id)}
        >
            <CardContent>
                <Typography variant="h5">{spc.nombre_especie}</Typography>
                <Typography>{spc.nombre_cientifico}</Typography>
                <Typography>{spc.origen}</Typography>
                <Typography>{spc.habitat}</Typography>
                <Typography>{spc.informacion_general}</Typography>
                <Typography>{spc.categoria}</Typography>
                <Typography>{spc.clasificacion}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    <style jsx global>{`
        .librarycard {
            margin: 20px 0;
        }
    `}</style>
    </>)
}
export default Library