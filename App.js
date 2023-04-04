import React, { useState } from "react";
import "./App.css";
import Header from "./UI/Header";
import NewProductForm from "./components/NewProductForm";

import ProductList from "./components/ProductList";

function App() {
  let [data, setData] = useState([
    { ID: "A001", Name: "i Phone 14", Price: 75000 },
    { ID: "A002", Name: "Macbook Pro", Price: 95000 },
    { ID: "A003", Name: "Apple Watch", Price: 25000 },
  ]);

  const newData = (product) => {
    setData((oldData)=>{
      return [...oldData , product]
    });
  };

  const deleteData = (id)=>{
       setData(data.filter((productDetails)=>{return productDetails.ID !==id}))
  }

  return (
    <div className="App">
      <Header></Header>
      <NewProductForm onNewData={newData} ></NewProductForm>
      <ProductList Data={data} onDelete={deleteData }></ProductList>
    </div>
  );
}

export default App;
