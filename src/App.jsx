import "./App.css";
import { CardComponent } from "./components/CardComponent";
import { NAME_APP, suma } from "./utils/const";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TitleComponent } from "./components/Title";
import { ButtonComponent } from "./components/ButtonComponent";
import { HomeContainer } from "./containers/HomeContainer";

function App() {
  const product = [
    { id: 1, name: 'niky', price: 23232 },
    { id: 2, name: 'niky official', price: 9999 }
  ];

  return (
    // <NavbarComponent/>
    // <ItemListContainer greeting={"hhola :)"} />
  );
}

export default App;
