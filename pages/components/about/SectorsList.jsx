// IMPORTS
import { 
    Forest, 
    Grass, 
    Park 
}                       from "@mui/icons-material"
import { 
    Grid, 
    ListItem, 
    ListItemIcon, 
    ListItemText 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import en               from '../../lang/en'
import es               from '../../lang/es'
// END IMPORTS
// COMPONENT
const SectorsList = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
    <Grid container spacing={2} className="sectors">
        <Grid item xs={12} sm={12} md={4}>
            <ListItem>
                <ListItemIcon>
                    <Grass fontSize='large' color='primary'/>
                </ListItemIcon>
                <ListItemText primary={t.about.sectorone} />
            </ListItem>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
            <ListItem>
                <ListItemIcon>
                    <Forest fontSize='large' color='primary'/>
                </ListItemIcon>
                <ListItemText primary={t.about.sectortwo} />
            </ListItem>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
            <ListItem>
                <ListItemIcon>
                    <Park fontSize='large' color='primary'/>
                </ListItemIcon>
                <ListItemText primary={t.about.sectorthree} />
            </ListItem>
        </Grid>
    </Grid>
    <style jsx global>{`
        .sectors {
            margin: 60px 0px;
        }
    `}</style>
    </>
    )
}
export default SectorsList
// END COMPONENT