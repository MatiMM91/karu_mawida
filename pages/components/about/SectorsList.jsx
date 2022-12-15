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

const SectorsList = () => {
    return (<>
    <Grid container spacing={2} className="sectors">
        <Grid item xs={12} sm={12} md={4}>
            <ListItem>
                <ListItemIcon>
                    <Grass fontSize='large' color='primary'/>
                </ListItemIcon>
                <ListItemText primary='"Vega-Humedal' />
            </ListItem>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
            <ListItem>
                <ListItemIcon>
                    <Forest fontSize='large' color='primary'/>
                </ListItemIcon>
                <ListItemText primary='Bosque Mixto (Especies nativas e introducidas)' />
            </ListItem>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
            <ListItem>
                <ListItemIcon>
                    <Park fontSize='large' color='primary'/>
                </ListItemIcon>
                <ListItemText primary='Bosque Nativo (Principalmente)'/>
            </ListItem>
        </Grid>
    </Grid>
    <style jsx global>{`
        .sectors {
            margin: 60px 0px;
        }
    `}</style>
    </>)
}
export default SectorsList