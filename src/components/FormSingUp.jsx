import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Switch from "@mui/material/Switch";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from "react";

function FormSingUp () {
    const [name, setName] = useState("")
    useEffect(() =>{  /* podemos usar useEffect para escuchar los cambios del estado cuando sean hechos, como si fuera tiempo real, mientras que el useState no los muestra enseguida */
        console.log("name cambio: ", name)
    }, [name])
    return (
    <form>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined" 
            fullWidth
            margin="normal"
            onChange={(e) =>{
                console.log(e.target.value)
                setName(e.target.value)
            }}
            value={name}
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