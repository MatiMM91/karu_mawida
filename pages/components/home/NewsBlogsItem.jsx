import {
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
}                       from "@mui/material"
import moment           from "moment"
import Image            from "next/image"
import { useRouter }    from "next/router"

const NewsBlogsItem = ({post, themeMode, changeTheme}) => {
    const router = useRouter()
    return (<>
    <Card className='coursesnewscard'>
        <CardActionArea 
            onClick={() => router.push('/blog/post/' + post.slug)}
            className='posts'
        >
            <CardMedia
                component="img"
                image={post.frontmatter.image}
                alt={post.frontmatter.title}
                className='img'
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    { moment(post.frontmatter.date).format('DD MMM YYYY') }
                </Typography>
                <Typography variant="h5" component="div" sx={{ pb: 0.8 }}>
                    {post.frontmatter.title}
                </Typography>
                <Typography variant="body2" className='posttext'>
                    {post.frontmatter.text}
                </Typography>
                <Typography variant="body2">
                    ...
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    <style jsx global>{`
        .posts {
            display:        flex;
            flex-direction: column;
            min-height:     200px;
        }

        .coursesnewscard {
            max-width:  100%;
            margin:     15px;
        }

        .posttext {
            height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .img {
            width:      100%;
            height:     300px;
        }
        
        @media only screen and (min-width: 1024px) {
            .posts {
                flex-direction: row;
            }
            
            .img {
                width:      320px;
                height:     250px;
            }
        }
    `}</style>
    </>)
}
export default NewsBlogsItem