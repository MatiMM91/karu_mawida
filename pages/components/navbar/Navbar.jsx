// IMPORTS
import { 
    AppBar, 
    Box, 
    Divider, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    Stack, 
    Toolbar,
}                       from "@mui/material"
import { 
    Chat,
    Home,
    Info,
    LibraryBooks,
    Login,
    Logout,
    Menu, 
    School
}                       from "@mui/icons-material"
import { useState }     from "react"
import { useRouter }    from "next/router"
import Image            from 'next/image'
import Link             from "next/link" 
import styles           from '../../../styles/Home.module.css'
import ColorMode        from "./ColorMode"
import LangSelector     from "./LangSelector"
import en               from '../../lang/en'
import es               from '../../lang/es'
// END IMPORTS


// COMPONENT
const Navbar = ({themeMode, changeTheme}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    const [open, setOpen] = useState(false)
    const [login, setLogin] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleLogin = () => {
        setLogin(!login)
    }

    const links = [
        {
            id: 'home',
            text: t.nav.home,
            icon: <Home fontSize="large"/>,
            link: '/'
        },
        {
            id: 'about',
            text: t.nav.about,
            icon: <Info fontSize="large"/>,
            link: '/about'
        },
        {
            id: 'library',
            text: t.nav.library,
            icon: <LibraryBooks fontSize="large"/>,
            link: '/library'
        },
        {
            id: 'courses',
            text: t.nav.courses,
            icon: <School fontSize="large"/>,
            link: '/courses'
        },
        {
            id: 'blog',
            text: t.nav.blog,
            icon: <Chat fontSize="large"/>,
            link: '/blog'
        },
    ]

    const loginlinks = [
        {
            id: 'categories',
            text: t.nav.categories,
            icon: <LibraryBooks fontSize="large"/>,
            link: '/categoriesmaintainers'
        },
        {
            id: 'species',
            text: t.nav.species,
            icon: <LibraryBooks fontSize="large"/>,
            link: '/speciesmaintainers'
        },
        {
            id: 'courses',
            text: t.nav.courses,
            icon: <School fontSize="large"/>,
            link: '/coursesmaintainers'
        },
    ]

    return (
    <>
        <AppBar className='appbar'>
            <Toolbar>
                <Box sx={{margin:'0 3px'}}>
                    {
                        themeMode === false ?
                            <Image src='/images/karumawidalogo.png' alt='Logo' width={60} height={50}/>
                        :
                            <Image src='/images/logoclaro.png' alt='Logo' width={60} height={50}/>
                            
                    }
                </Box>
                {
                    themeMode === false ?
                        <Image src='/images/nombrelogo.png' alt='Nombre' width={140} height={30}/>
                    :
                        <Image src='/images/nombrelogoclaro.png' alt='Nombre' width={140} height={30}/>

                }
                <Stack className={styles.menubar} direction='row'>
                    <IconButton className='menubtn' onClick={handleOpen}>
                        <Menu/>
                    </IconButton>
                    <List className='listnav'>
                        {
                            login ?
                                loginlinks.map((link, index) => (
                                    <ListItem key={index}>
                                        <Link href={link.link}><a>{link.text}</a></Link>
                                    </ListItem>
                                ))
                            :
                                links.map((link, index) => (
                                    <ListItem key={index}>
                                        <Link href={link.link}><a>{link.text}</a></Link>
                                    </ListItem>
                                ))
                        }
                    </List>
                    {
                        login ?
                            <IconButton onClick={handleLogin} className='log' sx={{margin:'25px 0'}}>
                                <Logout/>
                            </IconButton>
                        :
                            <IconButton onClick={handleLogin} className='log' sx={{margin:'25px 0'}}>
                                <Link href='/login'>
                                    <a>
                                        <Login/>
                                    </a>
                                </Link>
                            </IconButton>
                    }
                    <List className='listnavactions'>                       
                        <ListItem>
                            <ColorMode
                                themeMode={themeMode} 
                                changeTheme={changeTheme}
                            />
                        </ListItem>
                        <ListItem>
                            <LangSelector
                                themeMode={themeMode} 
                                changeTheme={changeTheme}
                            />
                        </ListItem>
                    </List>
                </Stack>
            </Toolbar>
        </AppBar>
        <Drawer anchor="top" open={open} onClose={() => setOpen(false)} className='menu'>
            <Divider/>
            <List>
                {
                login ?
                    loginlinks.map((link, index) => (
                        <ListItem key={index}>
                            <Link href={link.link}><a>{link.text}</a></Link>
                        </ListItem>
                    ))
                :
                    links.map((link, index) => (
                        <ListItem key={index}>
                            <Link href={link.link}><a>{link.text}</a></Link>
                        </ListItem>
                    ))
                }
            </List>
            <List className='menuactions'>           
                <ListItem>
                    <ColorMode
                        themeMode={themeMode} 
                        changeTheme={changeTheme}
                    />
                </ListItem>
                <ListItem>
                    <LangSelector
                        themeMode={themeMode} 
                        changeTheme={changeTheme}
                    />
                </ListItem>
            </List>
        </Drawer>
        <style jsx global>{`
            .appbar {
                background-color: #${themeMode  ? '111' : 'fff'};
            }
            
            .listnav {
                display: inline-flex;
                font-weight: bold;
                color: #${themeMode  ? 'ddd' : '555'};
            }

            .log {
                display: inline-flex;
                font-weight: bold;
                color: #${themeMode  ? 'ddd' : '555'};
            }

            .listnavactions {
                display: inline-flex;
                font-weight: bold;
                color: #${themeMode  ? 'ddd' : '555'};
            }

            .menubtn {
                display: none;
                margin: 25px 0;
            }

            .menu {
                padding: 0 25px;
            }

            .menuactions {
                display: none;
                margin: 0 auto;
            }

            @media only screen and (max-width: 1024px) {
                .listnav {
                    display: none;
                }
                
                .menubtn {
                  display: flex;
                }
            }

            @media only screen and (min-width: 1024px) {
                .menu {
                  display: none;
                }
            }

            @media only screen and (max-width: 600px) {
                .listnavactions {
                    display: none;
                }

                .menuactions {
                    display: flex;
                }
            }
        `}</style>
    </>
    )
}
export default Navbar
// END COMPONENT