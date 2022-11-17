import { 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Typography 
}                       from "@mui/material"
import moment           from 'moment'

const NewsLibraryCard = ({themeMode, changeTheme, species}) => {
    return (<>
    {
    species.slice(-1).map(spc => (    
    <Card sx={{display: 'flex', height: 200, width: '85%'}} key={spc.id}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'row', padding:1}}>
            <CardContent sx={{paddingRight: 5}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Última Especie 
                </Typography>
                <Typography variant="h5" component="div">
                    {spc.nombre_especie}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {moment(spc.created_at).format('DD MMM YYYY')}
                </Typography>
                <Typography variant="body2" sx={{width: 250}}>
                    {spc.informacion_general}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{width:100}}
                image={
                    themeMode ?
                    "/images/karumawidaclaro.png"
                    :
                    "/images/karumawidaoscuro.png"
                }
                alt='Logo'
            />
        </CardActionArea>
    </Card>
    ))
    }
    </>)
}
export default NewsLibraryCard