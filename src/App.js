import imagen0 from './images/rey_atanagildo.png';
import imagen1 from './images/rey_leogivildo.png';
import imagen2 from './images/rey_sisebuto.png';
import './stylesheet.css';

function App() {
  let nombres = ["Atanagildo", "Leogivildo", "Sisebuto"];

  return (
    <div className="contenedor">
      <div className='caja'>
        <img src={imagen0} alt='Atanagildo'/>
        <div className='nombre'>{nombres[0]}</div>
      </div>

      <div className='caja'>
        <img src={imagen1} alt='Leogivildo'/>
        <div className='nombre'>{nombres[1]}</div>
      </div>

      <div className='caja'>
        <img src={imagen2} alt='Sisebuto'/>
        <div className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;