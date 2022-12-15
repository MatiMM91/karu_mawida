import { 
    Box,
    Stack, 
    Typography 
}                       from "@mui/material"
import moment           from 'moment'
import Image            from "next/image"
import { useRouter }    from "next/router"

const NewsLibraryCard = ({themeMode, changeTheme, spc}) => {
    const router = useRouter()
    return (<>
    <Stack 
        direction="row" 
        className="newslibrary" 
        onClick={() => router.push('/library/species/' + spc.id)}
    >
        <Image
            width='120'
            height='100'
            src={
                themeMode ?
                "/images/karumawidaclaro.png"
                :
                "/images/karumawidaoscuro.png"
            }
            alt='Logo'
        />
        <Box className='textlibrary'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Última Especie 
            </Typography>
            <Typography variant="h5" component="div">
                {spc.nombre_especie}
            </Typography>
            <Typography color="text.secondary">
                {moment(spc.created_at).format('DD MMM YYYY')}
            </Typography>
        </Box>
    </Stack>
    <style jsx global>{`
        .newslibrary {
            margin-top: 25px;
            height:     150px;
        }

        .newslibrary:hover {
            cursor: pointer;
        }
        
        .textlibrary {
            margin-left: 15px;
            margin-top: 35px;
        }
    `}</style>
    </>)
}
export default NewsLibraryCard