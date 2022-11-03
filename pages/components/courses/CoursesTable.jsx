// IMPORTS
import { Delete, 
    Edit 
}                       from "@mui/icons-material"
import { 
    FormControlLabel,
    IconButton,
    Paper, 
    Switch, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableFooter, 
    TableHead, 
    TablePagination, 
    TableRow 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import { useState }     from "react"
import en               from '../../lang/en'
import es               from '../../lang/es'
import moment           from 'moment'
import Image            from "next/image"
import axios            from "axios"
import {toast}          from "react-toastify"
// END IMPORTS

// COMPONENT
const CoursesTable = ({courses}) => {
    const {asPath, locale, pathname} = useRouter()
    const router = useRouter()

    const t = locale === 'en' ? en : es

    const [active, setActive] = useState(courses.activo)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const rows = [1,2,3,4,5,6,7,8,9]

    
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
    const handleActive = () => {
        setActive(!active)
    }

    const handlerDelete = async (id) => {
        try {
            await axios.delete('/api/courses/' + id)
            router.push('/coursesmaintainers')          
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
    <>
        <TableContainer component={Paper} className="table">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{t.tablecourses.course}</TableCell>
                        <TableCell>{t.tablecourses.capacity}</TableCell>
                        <TableCell>{t.tablecourses.price}</TableCell>
                        <TableCell>{t.tablecourses.hours}</TableCell>
                        <TableCell>{t.tablecourses.startdate}</TableCell>
                        <TableCell>{t.tablecourses.enddate}</TableCell>
                        <TableCell>{t.tablecourses.img}</TableCell>
                        <TableCell>{t.tablecourses.description}</TableCell>
                        <TableCell align="center">{t.tablecourses.actions}</TableCell>
                    </TableRow>    
                </TableHead>
                <TableBody>
                {
                    courses.map(course => (
                        <TableRow key={course.id}>
                            <TableCell>{course.curso}</TableCell>        
                            <TableCell>{course.capacidad}</TableCell>        
                            <TableCell>{course.precio}</TableCell>        
                            <TableCell>{course.horas}</TableCell>        
                            <TableCell>{moment(course.fecha_inicio).format('DD-MM-YYYY')}</TableCell>        
                            <TableCell>{moment(course.fecha_termino).format('DD-MM-YYYY')}</TableCell>
                            <TableCell><Image src={'/' + course.img} alt={course.curso} height={150} width={150}/></TableCell>        
                            <TableCell>{course.descripcion}</TableCell>        
                            <TableCell>
                                <IconButton 
                                    className='actions'
                                    onClick={() => router.push('/coursesmaintainers/edit/' + course.id)}
                                >
                                    <Edit/>
                                </IconButton>
                                <IconButton 
                                    className='actions' 
                                    onClick={() => handlerDelete(course.id)}
                                >
                                    <Delete/>
                                </IconButton>
                                <FormControlLabel
                                    label={
                                        active ? t.formcourses.active : t.formcourses.inactive
                                    }
                                    control={
                                        <Switch
                                            checked={active}
                                            onChange={handleActive}
                                        />
                                    }
                                />
                            </TableCell>         
                        </TableRow>
                    ))
                }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>    
        </TableContainer>
        <style jsx global>{`
            .table {
                margin-top: 15px;
            }
            .actions {
                width: 40px;
            }
        `}</style> 
    </>
    )
}
export default CoursesTable
// END COMPONENT