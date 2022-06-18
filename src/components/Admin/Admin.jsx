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

    return(
        <div>
            <h2>Feedback Results</h2>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Feeling</TableCell>
                        <TableCell align="right">Comprehension</TableCell>
                        <TableCell align="right">Support</TableCell>
                        <TableCell align="right">Comments</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {answers.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="right">{row.feeling}</TableCell>
                        <TableCell align="right">{row.understanding}</TableCell>
                        <TableCell align="right">{row.support}</TableCell>
                        <TableCell align="right">{row.comments}</TableCell>
                        <TableCell align="right">delete btn</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}

export default Admin;