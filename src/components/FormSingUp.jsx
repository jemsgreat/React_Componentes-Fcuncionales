import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Switch from "@mui/material/Switch";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSingUp () {
    return (
    <form>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined" 
            fullWidth
            margin="normal"
        />
        <TextField 
            id="lastName" 
            label="Apellidos" 
            variant="outlined" 
            fullWidth
            margin="normal"
        />
        <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            fullWidth
            margin="normal"
        />
        <FormGroup>
            <FormControlLabel 
                control={
                    <Switch defaultChecked/>
                }
                label="promociones"
            />  
            <FormControlLabel 
                control={
                    <Switch defaultChecked/>
                }
                label="Novedades"
            />    
        </FormGroup>
        
        <Button variant="contained">Registrarse</Button>
    </form>
    )
}

export default FormSingUp