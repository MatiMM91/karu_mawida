// IMPORTS 
// MATERIAL UI IMPORTS
import { 
    InputLabel, 
    Switch 
}                       from "@mui/material"
import en               from '../lang/en'
import es               from '../lang/es'
import { useRouter }    from "next/router"
// END IMPORTS 
// COMPONENT 
const ColorMode = ({themeMode, changeTheme}) => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    return (
    <>
        <div className='switch'>
            <Switch
                checked={themeMode}
                onChange={changeTheme}   
            />
            <InputLabel className='subtext'>
                {
                    themeMode ? t.colormode.dark : t.colormode.light
                }
            </InputLabel>
        </div>
        <style jsx global>{`
            .switch {
            }
			
			.subtext {
                color:              #${themeMode ? 'fff' : '000'};
				font-size: 			0.78rem;
			}
        `}</style>
    </>
    )
}
export default ColorMode
// END COMPONENT