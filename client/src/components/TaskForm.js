import { Button, Card, CardContent, Grid, Typography, TextField, CircularProgress }from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function TaskForm() {
  // Variable para guardar las tareas
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);  // Estados para saber cuando esta cargando el fetch
  const [editing, setEditing] = useState(false);  // Estados para saber cuando se esta editando o creando una nueva tarea

  const navigate = useNavigate(); // Funcion para poder dirigirme a otra ruta
  const params = useParams(); // Funcion para recibir parametros por medio de la url

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  const loadTask = async (id) => {  // Funcion para tomar la informacion segun el parametro de id ingresado en la url y rellenar el formulario con la informacion que se actualizara
    const res = await fetch("http://localhost:4000/tasks/" + id);
    const data = await res.json();
    setTask({ title: data.title, description: data.description });
    setEditing(true);
  };

  const handleSubmit = async (e) => {   // Funcion para manejar las peticiones segun edicion o creacion de tareas
    e.preventDefault();
    setLoading(true);
    
    try {
      if(editing){
        await fetch(`http://localhost:4000/tasks/${params.id}`,{
          method: "PUT",
          body: JSON.stringify(task),
          headers: { "Content-Type": "application/json" },
        })
      }else{
        await fetch("http://localhost:4000/tasks", {
          method: "POST",
          body: JSON.stringify(task),
          headers: { "Content-Type": "application/json" },
      });
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });  // Maneja la informacion que se entregara al fetch para realizar el PUT o POST

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid item xs={3}>
          <Card sx={{mt: 5}} style={{backgroundColor: "#1e272e", padding: "1rem"}}>
            <Typography variant="5" textAlign="center" color="white">
              {editing ? "Edit Task" : "Create Task"}
            </Typography>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField  variant="filled" label="Write your title" sx={{display: "block", margin: ".5rem"}} name="title" value={task.title} onChange={handleChange} inputProps={{style: {color: "white"}}} InputLabelProps={{style: {color: "white"}}}/>
                <TextField variant="filled" label="Write your description" multiline rows={4} sx={{display: "block", margin: ".5rem"}} name="description" value={task.description} onChange={handleChange} inputProps={{style: {color: "white"}}} InputLabelProps={{style: {color: "white"}}}/>
                <Button variant="contained" color="primary" type="submit" disabled={!task.title || !task.description}>
                  {loading ? (<CircularProgress color="inherit" size={24}/>) : ("Save")}
                </Button>
              </form>
            </CardContent>
          </Card>
      </Grid>
    </Grid>
  )
}
