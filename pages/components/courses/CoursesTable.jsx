import { 
    Delete, 
    Edit 
}                       from "@mui/icons-material"
import { 
    IconButton,
    Paper, 
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
import moment           from 'moment'
import Image            from "next/image"
import axios            from "axios"
import { toast }        from "react-toastify"

const CoursesTable = ({courses}) => {
    const router = useRouter()
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [file, setFile] = useState()
    const [pathImage, setPathImage] = useState('')

    const blobsConvert = (buffer, name) => {
        let image = buffer.toString('base64')
        console.log(image)
        return buffer
    }
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    };
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(+event.target.value))
        setPage(0)
    }

    const handlerDelete = async (id) => {
        try {
            await axios.delete('/api/courses/' + id)
            router.push('/coursesmaintainers')          
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (<>
    <TableContainer component={Paper} className="table">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight:'bold'}}>CURSO</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">CAPACIDAD</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">PRECIO</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">HORAS</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">FECHA INICIO</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">FECHA TERMINO</TableCell>
                    <TableCell sx={{fontWeight:'bold'}}>IMAGEN</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">DESCRIPCIÓN</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">ACTIVO</TableCell>
                    <TableCell  sx={{fontWeight:'bold'}} align="center">ACCIONES</TableCell>
                </TableRow>    
            </TableHead>
            <TableBody>
            {
                courses
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(course => (
                    <TableRow hover key={course.id}>
                        <TableCell>{course.curso}</TableCell>        
                        <TableCell align="center">{course.capacidad}</TableCell>        
                        <TableCell align="center">{course.precio}</TableCell>        
                        <TableCell align="center">{course.horas}</TableCell>        
                        <TableCell align="center">{moment(course.fecha_inicio).format('DD-MM-YYYY')}</TableCell>        
                        <TableCell align="center">{moment(course.fecha_termino).format('DD-MM-YYYY')}</TableCell>
                        <TableCell>
                            <Image
                                alt={course.curso} 
                                height={80} 
                                width={120}
                                src={'/' + blobsConvert(course.img, course.curso)} 
                                // src={course.img} 
                                // src={blobsConvert}
                            />
                        </TableCell>        
                        <TableCell>{course.descripcion}</TableCell>        
                        <TableCell align="center">
                        {
                        course.activo === 1 ?
                            'Activo'
                        :
                            'Inactivo'
                        }
                        </TableCell>        
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
                        </TableCell>         
                    </TableRow>
                ))
            }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        count={courses.length}
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
    </>)
}
export default CoursesTable