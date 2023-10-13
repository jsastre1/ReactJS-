import './App.css';
import Proyecto1 from './componentes/Proyecto1';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Los mejores jugadores de la actualidad del futbol mundial 2023</h1>
        <Proyecto1
          nombre='Linda Caicedo'
          pais='colombia'
          imagen='linda'
          profesion='Jugadora de futbol profesional'
          testimonio='Una euforia total, uno no lo ve venir. No tengo palabras para describir lo
      que acabamos de hacer. Pero mucha mesura, ahora a celebrar, y ya luego pensar en lo que 
      se viene que es Marruecos, terminar bien y pensar en los otros partidos.' />
        <Proyecto1
          nombre='Lionel Messi'
          pais='argentina'
          imagen='messi'
          profesion='Jugador de futbol profesional'
          testimonio='Siempre le hablo (a Dios), le agradezco. Le dije que yo sabía que me iba 
          a regalar un Mundial. Lo sentía.' />
        <Proyecto1
          nombre='Alexia Putellas'
          pais='españa'
          imagen='putellas'
          profesion='Jugadora de futbol profesional'
          testimonio='Este año ha sido un Máster para mí. He aprendido muchísimo, he aprendido 
          cómo va esta industria. Conocer otra cara, que no es del fútbol sino de la industria, 
          porque antes juegas cada tres días, vas focalizadas, piensas sólo en ganar y he estado 
          un año parada y las he visto en todos los colores.' />
      </div>
    </div>
  );
}

export default App;
