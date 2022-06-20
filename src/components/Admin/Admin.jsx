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
import Checkbox from '@mui/material/Checkbox';
// mui 'confirm delete' modal imports
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

function Admin( props ){
    // hook for array of responses
    let [answers, setAnswers] = useState([]);
    // hook for modal display
    const [open, setOpen] = useState(false);
    // hook for id of item to delete
    const [idToDelete, setIdToDelete] = useState(0);

    
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

    // delete item after delete btn is clicked in modal
    const deleteItem=()=>{
        console.log('in deleteItem:', idToDelete);
        // DELETE request
        axios.delete(`/feedback/delete?id=${idToDelete}`).then((response)=>{
            console.log(response.data);
            // GET feedback from database and display
            fetchAnswers();
            // reset idToDelete to be safe
            setIdToDelete(0);
        }).catch((err)=>{
            console.log(err);
            alert('Error deleting feedback item');
        })
        // close modal
        handleClose();
    }

    // click handlers to open/close modal
    const handleClickOpen = (itemID) => {
        setOpen(true);
        setIdToDelete(itemID)
    };
    const handleClose = () => {
        setOpen(false);
    };
    // click handler for checkbox (flag/unflag item)
    const handleCheck=(itemID) =>{
        console.log('in handleCheck:', event.target.checked, itemID);
        // PUT request
        axios.put(`/feedback/flag?id=${itemID}`).then((response)=>{
            console.log(response.data);
            // GET latest database items
            fetchAnswers();
        }).catch((err)=>{
            console.log(err);
            alert('Error flagging/unflagging item');
        })
        
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
                        <TableCell align="center">Flagged</TableCell>
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
                            <TableCell align="center">
                                <Checkbox
                                    checked={row.flagged}
                                    onChange={()=>{handleCheck(row.id)}}
                                    inputProps={{ 'aria-label': 'controlled' }}/>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton
                                    aria-label='delete'
                                    color='primary'
                                    onClick={()=>{handleClickOpen(row.id)}}>
                                    <DeleteSweepIcon/>
                                </IconButton>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description">
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to permanently delete this feedback response?
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={deleteItem} autoFocus>
                                        Delete
                                    </Button>
                                    </DialogActions>
                                </Dialog>
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