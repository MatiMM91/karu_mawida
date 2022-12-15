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
    TableRow,
    TablePagination, 
}                       from "@mui/material"
import { useRouter }    from "next/router"
import { useState }     from "react"
import axios            from "axios"
import {toast}          from "react-toastify"

const SpeciesTable = ({species}) => {
    const router = useRouter()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    // const emptyRows =
    //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - species.length) : 0;
  
      
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(+event.target.value))
        setPage(0)
    }

    const handlerDelete = async (id) => {
        try {
            await axios.delete('/api/species/' + id)
            router.push('/speciesmaintainers')          
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
        
    return (<>
    <TableContainer component={Paper} className="table">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight:'bold'}}>ESPECIE</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">CATEGORÍA</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">NOMBRE CIENTÍFICO</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">ORIGEN</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">HÁBITAT</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">INFORMACIÓN GENERAL</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">ACCIONES</TableCell>
                </TableRow>    
            </TableHead>
            <TableBody>
            {
                species
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(spec => (
                    <TableRow hover key={spec.id}>
                        <TableCell>{spec.nombre_especie}</TableCell>    
                        <TableCell align="center">{spec.categoria}</TableCell>     
                        <TableCell align="center">{spec.nombre_cientifico}</TableCell>    
                        <TableCell align="center">{spec.origen}</TableCell>    
                        <TableCell align="center">{spec.habitat}</TableCell>    
                        <TableCell>{spec.informacion_general}</TableCell>    
                        <TableCell>
                            <IconButton 
                                className='actions'
                                onClick={() => router.push('/speciesmaintainers/edit/' + spec.id)}
                            >
                                <Edit/>
                            </IconButton>
                            <IconButton 
                                className='actions' 
                                onClick={() => handlerDelete(spec.id)}
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
                        count={species.length}
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
    `}</style> 
    </>)
}
export default SpeciesTable