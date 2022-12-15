import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Head                 from 'next/head'
import {useState}           from 'react'
import {
    ThemeProvider,
    createTheme,
    Paper,
}                           from '@mui/material'
import Navbar               from './components/navbar/Navbar'
import {ToastContainer}     from 'react-toastify'
import { 
    SessionProvider, 
}                           from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
    const [isDark, setIsDark] = useState(false)
	
	const changeIsDark = e => {
		setIsDark(!isDark)
	}

    const theme = createTheme({
		palette: {
            mode: isDark ? 'dark' : 'light',
            background: {
                default: isDark ? '#000' : '#fff',
                paper: isDark ? '#000' : '#fff',
            },
			primary: {
				main: isDark ? '#117e41' : '#006d40',
			},
			text: {
				primary: isDark ? '#cecece' : '#343434',
			},
        },
    })

    return (<>
    <Head>
        <title>Karü Mawida</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logoclaro.png" />
    </Head>
    <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
            <Paper>
                <Navbar
                    themeMode={isDark}
                    changeTheme={changeIsDark}
                    theme={theme} 
                />
                <ToastContainer/>
                <Component 
                    {...pageProps} 
                    themeMode={isDark}
                    changeTheme={changeIsDark}    
                />
            </Paper>
        </ThemeProvider>
    </SessionProvider>
    </>)
}
export default MyApp