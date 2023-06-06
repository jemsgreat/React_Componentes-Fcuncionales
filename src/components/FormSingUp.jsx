import { Button } from "@mui/material"

function FormSingUp () {
    return (
    <form>
        <label>Nombre</label>
        <input type="text" />
        <label>Apellidos</label>
        <input type="text" />
        <label>Correo Electronico</label>
        <input type="email" />
        <label>Promociones</label>
        <input type="checkbox" />
        <Button variant="contained">Registrarse</Button>
    </form>
    )
}

export default FormSingUp