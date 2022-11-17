import { 
    Grid, 
    Typography, 
}                       from '@mui/material'

const AboutBody = () => {
    return (<>
    <Grid container className='aboutbody'>
        <Grid item md={6} className='bodyleft'>
            <Typography variant='body'>
            Este terreno fue parcialmente explotado hace unas décadas, la extracción maderera de árboles nativos era muy notoria, sin embargo aún en los alrededores  se conservan algunos árboles antiguos donde podemos apreciar y destacar increíbles ejemplares de mañios de hojas largas y coigües, que albergan a su alrededor un bosque nativo original compuesto de árboles como el arrayán, laurel, olivillo, canelo, radal, notro, roble y ulmo, y otras especies como copihues, botellitas, voqui colorado, quilineja, orquídea nativa, viola rubella, vitalahuen, helechos, entre otras.
            </Typography>
        </Grid>
        <Grid item md={6} className='bodyright'>
            <Typography variant='body'>
            El proyecto en cuestión tiene un espíritu de conservación y restauración, es decir buscamos proteger, preservar la flora y fauna presentes en el territorio; como también buscamos recuperar y ayudar a la regeneración del bosque, integrando cuidadosa y responsablesamente otras especies nativas que aporten a la biodiversidad propia del lugar, enriqueciendo el ecosistema, y retornándole así, su identidad original con su belleza endémica.
            </Typography>
        </Grid>
    </Grid>
    <style jsx global>{`
        .aboutbody {
            display: flex;
            justify-content: space-around;
            margin: 60px 0;
            background: linear-gradient(0deg, rgba(46,101,64,1) 34%, rgba(60,133,60,1) 76%);
            color: white;
            border-radius: 60px 60px 60px 60px;
        }

        .bodyleft {
            padding: 30px;
        }
        
        .bodyright {
            padding: 30px;
        }
    `}</style>
    </>)
}
export default AboutBody