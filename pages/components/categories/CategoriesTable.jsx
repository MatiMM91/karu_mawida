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
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const rows = [1,2,3,4,5,6,7,8,9]
  
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handlerDelete = async (id) => {
        try {
            await axios.delete('/api/categories/' + id)
            router.push('/categoriesmaintainers')          
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

    return (<>
    <TableContainer component={Paper} className="table">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight:'bold'}}>CATEGORÍA</TableCell>
                    <TableCell sx={{fontWeight:'bold'}}>CLASIFICACIÓN</TableCell>
                    <TableCell sx={{fontWeight:'bold'}}>DESCRIPCIÓN</TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="center">ACCIONES</TableCell>
                </TableRow>    
            </TableHead>
            <TableBody>
            {
                categories.map(category => (
                    <TableRow key={category.id}>
                        <TableCell>{category.categoria}</TableCell>    
                        <TableCell>{category.clasificacion}</TableCell>     
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
    `}</style> 
    </>)
}
export default CategoriesTable