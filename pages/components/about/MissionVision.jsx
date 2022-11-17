import { 
    Box,
    Grid,  
    Typography, 
}                       from "@mui/material"

const MissioVision = () => {
    return (<>
    <Box className="aboutus" >
        <Typography variant='h4' color='primary'>
            Misión y Visión
        </Typography>
        <Grid container spacing={2}>
            <Grid item sm={12} md={6} className="missionvision">
                <Typography variant='body'>
                    Nuestra Misión e intención es generar un espacio sagrado para el intercambio del buen conocimiento, para “aprender haciendo” a través de diferentes herramientas, oficios y disciplinas que sean conscientes con la naturaleza, que nos den a conocer el gran valor y el respeto que debemos cultivar hacia la biodiversidad de cada lugar, como parte de nuestro patrimonio. Facilitando talleres que permitan también el autoconocimiento a través de encuentros en y con la naturaleza donde aprendamos apreciar nuestra-su complejidad y nuestra-su tan amplia expresión de belleza, y experimentar la plenitud de “estar y ser” parte de esta inmensidad.
                </Typography>
            </Grid>
            <Grid item sm={12} md={6} className="missionvision">
                <Typography variant='body'>
                Nuestra Visión es crear un espacio de conexión profunda, un “puente” entre los seres humanos y la naturaleza, que promueva el sentir, vibrar y el ser, y desde allí reparar nuestro daño y repararnos a nosotros mismos en ese acto.
                </Typography>
            </Grid>
        </Grid>
    </Box>
    <style jsx global>{`
        .aboutus {
            margin: 60px 0;
        }
        
        .missionvision {
            margin-top: 12px;
        }
    `}</style>
    </>)
}
export default MissioVision