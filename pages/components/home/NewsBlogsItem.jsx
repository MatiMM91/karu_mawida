// IMPORTS
import { 
    Card,  
    CardActions,  
    CardContent, 
    CardHeader, 
    CardMedia, 
    Typography 
}                       from "@mui/material"
// END IMPORTS
// COMPONENT
const NewsBlogsItem = ({item, themeMode, changeTheme}) => {
    return (
    <>
        <Card sx={{margin:'20px 0'}}>
            <CardActions sx={{display: 'flex', flexDirection: 'row', padding:1}}>
                <CardContent sx={{margin:'0'}}>
                    <CardHeader
                        title={item.title}
                        subheader={item.date}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {item.text}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{width:150}}
                    image={
                        themeMode ?
                        "/images/karumawidaclaro.png"
                        :
                        "/images/karumawidaoscuro.png"
                    }
                    alt="Paella dish"
                />
            </CardActions>
        </Card>
    </>
    )
}
export default NewsBlogsItem
// END COMPONENT