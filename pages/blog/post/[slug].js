import { 
    Box, 
    Typography 
}                       from '@mui/material'
import axios            from 'axios'
import { useRouter }    from "next/router"
import { useState }     from 'react'
import Footer           from '../../components/Footer'

const post = ({themeMode, changeTheme}) => {
    const router = useRouter()
    
    const [post, setPost] = useState({
        title: '',
        date: '',
        text: '',
        image: '',
    })

    const getPost = async () => {
        const {data} = await axios.get('/posts/' + router.query.slug)
        setPost(data)
    }
    
    getPost(router.query.slug)
    
    return (<>
    <Box className="post">
        <Typography variant='h3'>
            {post.title}
        </Typography>
        <Typography variant='h3'>
            {post.date}
        </Typography>
        <Typography variant='h3'>
            {post.text}
        </Typography>
    </Box>
    <Footer
        themeMode={themeMode}
        changeTheme={changeTheme}   
    />
    <style jsx global>{`
        .post {
            min-height:     80vh;
            padding:        0 60px;
            padding-top:    100px;
            padding-bottom: 40px;
        }
    `}</style>
    </>)
}

export default post