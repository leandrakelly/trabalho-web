import React, { useEffect, useState } from "react";
import api from "./services/api";
import "./styles.css"
import { Link } from 'react-router-dom'

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders").then((response) => {
        setOrders(response.data)
    })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return(
    <div className="App">
      <h1>Dia do 🍔 </h1>
      <h2>Pedidos:</h2>
      {orders.map(order => {
        return(
          <div className="orders">
            <h3>{order.name}</h3>
            {order.ingredients.map(ingredient => {
              return(<p>{ingredient.name}</p>)
            })}
          </div>
        )
      })}
      <p>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </p>
    </div>
  )
}

export default Orders;
