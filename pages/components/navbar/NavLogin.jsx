import { IconButton }   from "@mui/material"
import { 
    Login,
    Logout,
}                       from "@mui/icons-material"
import Link             from "next/link" 
import { 
    signOut, 
    useSession 
}                       from "next-auth/react"
import { useRouter }    from "next/router"

const NavLogin = ({themeMode, changeTheme}) => {
    const router = useRouter()
    const { data: session } = useSession()

    const handleLogout = () => {
        signOut()
        router.push('/')
    }

    return (<>
    {
        session ?
        <IconButton 
            onClick={handleLogout} 
            className='log' 
            sx={{margin:'25px 0'}}
            title='Logout'
        >
            <Logout/>
        </IconButton>
        :
        <Link href='/login'>
            <a>
                <IconButton 
                    className='log' 
                    sx={{margin:'25px 0'}}
                    title='Login'
                >
                    <Login/>
                </IconButton>
            </a>
        </Link>
    }
    <style jsx global>{`
        .log {
            display: inline-flex;
            font-weight: bold;
            color: #${themeMode  ? 'ddd' : '555'};
        }
        
        .log:hover {
            color: #117e41;
        }
    `}</style>
    </>)
}
export default NavLogin