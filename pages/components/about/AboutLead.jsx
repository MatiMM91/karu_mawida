import { 
    Box, 
    Typography 
}                       from "@mui/material"

const AboutLead = () => {
    return (<>
    <Box className='lead'>
        <Typography variant='h4' color='primary'>
            Viaje a lo Natural
        </Typography>
        <Box className='leadtext'>
            <Typography variant='body' className='lead'>
            Este Parque nace desde el amor, la admiración, el respeto profundo y sincero que sentimos hacia la naturaleza, reconocemos en ella a la mejor maestra de la verdad, nuestra gran escuela y el hogar de tantos seres vivos… nuestro hogar.
            </Typography>
            <Typography variant='body'>
            Es por ello que nos propusimos proteger y restaurar activamente este bosque y vega-humedal, que comprende 5,5 hectáreas, las cuales hemos dividido en tres sectores (todas en proceso de restauración y regeneración natural):
            </Typography>
        </Box>
    </Box>
    <style jsx global>{`
        .lead {
            margin: 60px 0;
        }

        .leadtext {
            margin-top: 15px;
        }
    `}</style>
    </>)
}   
export default AboutLead