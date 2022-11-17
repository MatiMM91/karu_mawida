import { 
    InputLabel, 
    Switch 
}                       from "@mui/material"

const ColorMode = ({themeMode, changeTheme}) => {
    return (<>
    <div className='switch'>
        <Switch
            checked={themeMode}
            onChange={changeTheme}   
        />
        <InputLabel className='subtext'>
        {
            themeMode ? "Modo Oscuro" : "Modo Claro"
        }
        </InputLabel>
    </div>
    <style jsx global>{`
        .subtext {
            color: #${themeMode ? 'fff' : '555'};
            font-size: 0.78rem;
        }
    `}</style>
    </>)
}
export default ColorMode
// END COMPONENT