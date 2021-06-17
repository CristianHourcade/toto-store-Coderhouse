import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { getData } from './utils/const';
import { CardComponent } from './components/CardComponent';

function App() {
  let [productos, setProductos] = useState([]);

  useEffect(() => {
    // ya se monto
    const waitForData = async () => {
      let data = await getData('zapatillas'); // llamada a la api
      let aux = data.map(element => {
        return {
          title: element.title,
          img: element.thumbnail,
          price: element.price
        }
      });
      setProductos(aux);
    }

    waitForData();
  }, [])

  if (productos.length > 0) {
    console.log(productos);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          {productos.length == 0 ? 'Hola toy cargando' : 'ya cargue'}
          {productos.map((element,index) => {
            return (
              <span key={index}>
                <CardComponent title={element.title} img={element.img} price={element.price} />
              </span>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
