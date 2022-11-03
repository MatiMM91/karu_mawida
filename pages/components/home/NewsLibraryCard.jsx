// IMPORTS
import { 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Typography 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
// END IMPORTS
// COMPONENT
const NewsLibraryCard = ({themeMode, changeTheme}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es
    return (
    <>
        <Card sx={{display: 'flex', width:350, height: 200}}>
            <CardActionArea sx={{display: 'flex', flexDirection: 'row', padding:1}}>
                <CardContent sx={{paddingRight: 5}}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {t.home.library}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {t.home.lastspecies}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        12 Ago 2022
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
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
    </>
    )
}
export default NewsLibraryCard
// END COMPONENT