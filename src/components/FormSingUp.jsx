import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Switch from "@mui/material/Switch";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from "react";

function FormSingUp ({ handleSubmit }) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)



    /* useEffect(() =>{  /* podemos usar useEffect para escuchar los cambios del estado cuando sean hechos, como si fuera tiempo real, mientras que el useState no los muestra enseguida */
        /* console.log("name cambio: ", name)
    }, [name]) */ 

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit({
                    name,
                    lastName,
                    email,
                    prom,
                    nov,
                })
            }}                    
        >
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth
                margin="normal"
                onChange={(e) =>
                    setName(e.target.value)
                }
                value={name}
            />
            <TextField 
                id="lastName" 
                label="Apellidos" 
                variant="outlined" 
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) =>
                    setLastName(e.target.value)
                }

            />
            <TextField 
                id="email" 
                label="Email" 
                variant="outlined" 
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />
            <FormGroup>
                <FormControlLabel 
                    control={
                        <Switch 
                            checked={prom}
                            onChange={(e) =>
                                setProm(
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="promociones"
                />  
                <FormControlLabel 
                    control={
                        <Switch 
                            checked={nov}
                            onChange={(e) =>
                                setNov(
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Novedades"
                />    
            </FormGroup>
            
            <Button variant="contained" type="submit">Registrarse</Button>
        </form>
    )
}

export default FormSingUp