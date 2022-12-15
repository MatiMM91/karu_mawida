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
import axios            from "axios"
import {toast}          from "react-toastify"

const CategoriesTable = ({categories}) => {
    const router = useRouter()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleChangePage = (event, newPage) => {
      setPage(newPage)
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(+event.target.value))
      setPage(0)
    }

    const handlerDelete = async (id) => {
        try {
            await axios.delete('/api/categories/' + id)
            router.push('/categoriesmaintainers')          
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (<>
    <TableContainer component={Paper} className="table">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight:'bold'}}>CATEGORÍA</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">CLASIFICACIÓN</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">DESCRIPCIÓN</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">ACCIONES</TableCell>
                </TableRow>    
            </TableHead>
            <TableBody>
            {
                categories
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(category => (
                    <TableRow hover key={category.id}>
                        <TableCell>{category.categoria}</TableCell>    
                        <TableCell align="center">{category.clasificacion}</TableCell>     
                        <TableCell>{category.descripcion}</TableCell>    
                        <TableCell>
                            <IconButton 
                                className='actions'
                                onClick={() => router.push('/categoriesmaintainers/edit/' + category.id)}
                            >
                                <Edit/>
                            </IconButton>
                            <IconButton 
                                className='actions' 
                                onClick={() => handlerDelete(category.id)}
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
                        count={categories.length}
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
export default CategoriesTable