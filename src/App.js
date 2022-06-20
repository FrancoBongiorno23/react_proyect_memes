import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  }
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  }
  const onClickExportar = function (evento) {
    alert("Exportando ando");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      document.body.appendChild(canvas)
      var img    = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      
      <select onChange={onChangeImagen}>
        <option value="llamas">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="filosoraptor">Filosoraptor</option>
        <option value="smart">Smart Guy</option>
        <option value="nacho">Nacho</option>
      </select><br/>

      <input type="text" onChange={onChangeLinea1} placeholder="Linea 1"/><br/>
      <input type="text" onChange={onChangeLinea2} placeholder="Linea 2"/><br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span><br />
        <span>{linea2}</span><br />
        <img src={"img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
