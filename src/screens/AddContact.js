import { Button, Dialog, DialogContent, DialogTitle, Fab, TextField, DialogActions } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';


export default function AddContact() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function handleSave() {
        console.log(name)
        console.log(phone)
    }
    return (
        <div>
            <Fab color="primary"  onClick={handleClickOpen}>
                <AddIcon />
            </Fab>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Contact</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}

                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Phone Number"
                        type="phone"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
