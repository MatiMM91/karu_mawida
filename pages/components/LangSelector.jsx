// IMPORTS 
import { 
    Select,
    MenuItem,
}                       from '@mui/material'
import { useRouter }    from "next/router"
import en               from '../lang/en.json'
import es               from '../lang/es.json'
// END IMPORTS 

// COMPONENT 
const LangSelector = ({themeMode, changeTheme}) => {
    const {asPath, locale, pathname, push} = useRouter()
    const t = locale === 'en' ? en : es

    const handleChange = (e) => {
        push(pathname, pathname, {
            locale: e.target.value
        });
    };

    return (
    <>
        <Select 
            onChange={handleChange}
            defaultValue='en'
            className='select'
            variant='outlined'
        >
            <MenuItem
                value='en'
                className='select-option'
            >
                {t.lang.en}
            </MenuItem>
            <MenuItem
                value='es'
                className='select-option'
            >
                {t.lang.es}
            </MenuItem>
        </Select>
        <style jsx global>{`
            .select {
                color:              #${themeMode  ? 'ddd' : '555'};
                font-weight:        bold;
            }
        `}</style>
    </>
    )
}
export default LangSelector
// END COMPONENT 