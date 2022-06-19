import { useState, useEffect } from 'react';
import axios from 'axios';
// mui table imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

function Admin( props ){

    const [answers, setAnswers] = useState([]);
    
    //make GET call on page load
    useEffect(()=>{
        fetchAnswers();
    }, []);

    // GET responses from database
    const fetchAnswers=()=>{
        axios.get('/feedback').then((response)=>{
            console.log(response.data);
            // store response in answers array:
            setAnswers(response.data);
        }).catch((err)=>{
            console.log(err);
            alert('Error getting responses');
        })
    }

    const deleteItem=(itemID)=>{
        console.log('in deleteClick:', itemID)
    }

    return(
        <div>
            <h2>Feedback Results</h2>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell align="center">Comprehension</TableCell>
                        <TableCell align="center">Support</TableCell>
                        <TableCell align="center">Comments</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {answers.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{row.feeling}</TableCell>
                        <TableCell align="center">{row.understanding}</TableCell>
                        <TableCell align="center">{row.support}</TableCell>
                        <TableCell align="center">{row.comments}</TableCell>
                        <TableCell align="right">
                            <IconButton
                                aria-label='delete'
                                color='primary'
                                onClick={()=>deleteItem(row.id)}>
                                <DeleteSweepIcon/>
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}

export default Admin;