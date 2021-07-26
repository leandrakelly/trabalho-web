import React, { useEffect, useState } from "react";
import api from "./services/api";
import "./styles.css"

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [choosen, setChoosen] = useState([]);

  useEffect(() => {
    api
      .get("/ingredients")
      .then((response) => {
        setIngredients(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function selectId(e){
    const newProduct = choosen;
    newProduct.push(e.target.value);
    setChoosen(newProduct);
  }
  
  function MakeOrder(e){
    const campo = document.getElementById('campo').value
    if(campo == "" || campo == null || campo == undefined){
      alert("Digite seu nome")
      return false
    }else{
      api.post("/orders", {name: campo, ingredients: choosen})
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      window.location.href = "http://localhost:3000/orders"
    }
  }

  return (
    <div className="App">
      <h1>Dia do 🍔 </h1>
      <h3>Escolha seus igredientes! </h3>
      {ingredients.map(ingredient => {
        return (
          <>
              <button value={ingredient._id} onClick={selectId}>
                {ingredient.name}
              </button>
          </>
        )
      })}
     <h2> Qual seu nome? </h2>
     <p><input type="text" id="campo"/></p>
        <button onClick={MakeOrder} id="sendBtn">Pedir!</button>
    </div>
  );
}

export default App;
