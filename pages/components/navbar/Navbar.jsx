import { 
    AppBar, 
    Divider, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    Stack, 
    Toolbar,
}                       from "@mui/material"
import { Menu }         from "@mui/icons-material"
import { useState }     from "react"
import styles           from '../../../styles/Home.module.css'
import ColorMode        from "./ColorMode"
import LogoNav          from "./LogoNav"
import NavList          from "./NavList"
import NavLogin         from "./NavLogin"

const Navbar = ({themeMode, changeTheme}) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (<>
    <AppBar className='appbar'>
        <Toolbar>
            <IconButton className='menubtn' onClick={handleOpen}>
                <Menu/>
            </IconButton>
            <LogoNav themeMode={themeMode} changeTheme={changeTheme}/>
            <Stack className={styles.menubar} direction='row'>
                <List className='listnav'>
                    <NavList/>
                </List>
                <NavLogin themeMode={themeMode} changeTheme={changeTheme}/>
                <List sx={{display:{xs:'none', sm:'flex'}}}>                       
                    <ListItem>
                        <ColorMode
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
            <NavList/>
        </List>
        <List sx={{display:{xs:'flex', sm:'none'}}}>           
            <ListItem>
                <ColorMode
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
            color: #${themeMode  ? 'ddd' : '555'};
            display: flex;
            justify-content: center;
        }

        .menubtn {
            display: none;
            margin: 25px 0;
        }

        .menu {
            padding: 0 25px;
            display: none;
        }

        @media only screen and (max-width: 1024px) {
            .listnav {
                display: none;
            }
            
            .menubtn {
                display: flex;
            }
            .menu {
                display: flex;
            }
        }
    `}</style>
    </>)
}
export default Navbar