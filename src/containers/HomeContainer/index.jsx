import { logicalExpression } from "@babel/types";
import { useEffect, useState } from "react";
import { CardComponent } from "../../components/CardComponent";
import { NavbarComponent } from "../../components/NavbarComponent";

export const HomeContainer = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Cuando el componente ya este montado - Traer datos de BD - Conexiones a API - Tokens etc
        console.log("Se monto");
        //Logica validar producs sin stock, etc
        return () => {
            console.log("estoy muriendo")
        }
    },[cart]);

    console.log("hola"); // Will mount - UseState - UseContext - Funciones
    return (
        <>
            <img src="/img/logo192.png" alt="" title="" />
            <NavbarComponent cart={cart} />
            <button onClick={() => { setCart([...cart, { id: 1, name: 'toto', price: 999 }]) }}>
                Agregar al carrito
            </button>
            <section style={{ display: "flex", flexDirection: 'row' }}>
                <CardComponent title={'holu'} price={7999} />
                <CardComponent title={'holu'} price={7999} />
                <CardComponent title={'holu'} price={7999} />
                <CardComponent title={'holu'} price={7999} />
            </section>
        </>
    )
}