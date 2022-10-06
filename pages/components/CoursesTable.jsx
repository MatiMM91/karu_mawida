// IMPORTS
import { Delete, 
    Edit 
}                       from "@mui/icons-material"
import { 
    FormControlLabel,
    IconButton,
    InputLabel,
    Paper, 
    Stack, 
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
import en               from '../lang/en'
import es               from '../lang/es'
// END IMPORTS

// COMPONENT
const CoursesTable = () => {
    const {asPath, locale, pathname} = useRouter()
    const t = locale === 'en' ? en : es

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const rows = [1,2,3,4,5,6,7,8,9]
  
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
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
                        <TableCell>{t.tablecourses.icon}</TableCell>
                        <TableCell>{t.tablecourses.description}</TableCell>
                        <TableCell align="center">{t.tablecourses.actions}</TableCell>
                    </TableRow>    
                </TableHead>
                <TableBody>
                <TableRow>
                        <TableCell>fsdkjgh</TableCell>    
                        <TableCell>fsdkjgh</TableCell>    
                        <TableCell>fsdkjgh</TableCell>    
                        <TableCell>fsdkjgh</TableCell>    
                        <TableCell>fsdkjgh</TableCell>    
                        <TableCell>fsdkjgh</TableCell>    
                        <TableCell>fsdkjgh</TableCell>    
                        <TableCell>fsdkjghsdfasdfasdfasdfasdfasdfasdfas</TableCell>    
                        <TableCell>
                  
                            <IconButton className='actions'><Edit/></IconButton>
                            <IconButton className='actions'><Delete/></IconButton>
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