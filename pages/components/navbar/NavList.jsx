import { ListItem,}     from "@mui/material"
import { 
    Chat,
    Home,
    Info,
    LibraryBooks,
    School
}                       from "@mui/icons-material"
import Link             from "next/link" 
import { 
    useSession 
}                       from "next-auth/react"

const NavList = () => {
    const { data: session } = useSession()

    const links = [
        {
            id: 'home',
            text: 'INICIO',
            icon: <Home fontSize="large"/>,
            link: '/'
        },
        {
            id: 'about',
            text: 'ACERCA',
            icon: <Info fontSize="large"/>,
            link: '/about'
        },
        {
            id: 'library',
            text: 'BIBLIOTECA',
            icon: <LibraryBooks fontSize="large"/>,
            link: '/library'
        },
        {
            id: 'courses',
            text: 'CURSOS',
            icon: <School fontSize="large"/>,
            link: '/courses'
        },
        {
            id: 'blog',
            text: 'BLOG',
            icon: <Chat fontSize="large"/>,
            link: '/blog'
        },
    ]

    const loginlinks = [
        {
            id: 'categories',
            text: 'CATEGORIAS',
            icon: <LibraryBooks fontSize="large"/>,
            link: '/categoriesmaintainers'
        },
        {
            id: 'species',
            text: 'ESPECIES',
            icon: <LibraryBooks fontSize="large"/>,
            link: '/speciesmaintainers'
        },
        {
            id: 'courses',
            text: 'CURSOS',
            icon: <School fontSize="large"/>,
            link: '/coursesmaintainers'
        },
    ]
    return (<>
    {
    session ?
        loginlinks.map(link => (
            <ListItem key={link.id}>
                <Link href={link.link}><a>{link.text}</a></Link>
            </ListItem>
        ))
    :
        links.map(link => (
            <ListItem key={link.id}>
                <Link href={link.link}><a>{link.text}</a></Link>
            </ListItem>
        ))
    }
    </>)
}
export default NavList