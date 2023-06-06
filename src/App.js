
import { Container } from '@mui/material';
import './App.css';
import FormSingUp from './components/FormSingUp';
import Typography from '@mui/material/Typography';



function App() {

  const handleSubmit = (valores) => {
    console.log('APPJS: ',valores )
  }

  return (
    <Container component="section" maxWidth="md">
      <Typography variant="h3" align="center" component="h1">Formulario Registro</Typography>
      <FormSingUp handleSubmit={handleSubmit} />
    </Container>      
  );
}

export default App;
