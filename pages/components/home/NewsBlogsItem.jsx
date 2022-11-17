import { 
    Box,
    Typography 
}                       from "@mui/material"

const NewsBlogsItem = ({item}) => {
    return (
    <Box sx={{margin:'25px 0'}}>
        <Typography variant="h6">
            {item.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.8 }}>
            {item.date}
        </Typography>
        <Typography variant="text" color="text.secondary">
            {item.text}
        </Typography>
    </Box>
    )
}
export default NewsBlogsItem