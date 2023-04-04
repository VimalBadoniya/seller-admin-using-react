import React, { useState } from "react";

function NewProductForm(props) {

    const[ProductId , setProductId] = useState("")
    const[Name , setName] = useState("")
    const[Price , setPrice] = useState("")

    const ProductIdChangeHandler = (e)=>{
      setProductId(e.target.value);
    }

    const NameChangeHandler = (e)=>{
      setName(e.target.value);
    }

    const PriceChangeHandler = (e)=>{
      setPrice(e.target.value);
    }

    let newData = {ID: ProductId, Name : Name  , Price : Price}

  const SubmitHandler = (e) => {
    e.preventDefault();
    props.onNewData(newData)
    setName("")
    setPrice("")
    setProductId("")
    

  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div>
          <label htmlFor="id">Product Id</label>
          <input id="id" name="id" type="text" onChange={ProductIdChangeHandler} value={ProductId} required ></input>
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" onChange={NameChangeHandler} value={Name} required></input>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input id="price" name="price" type="number" onChange={PriceChangeHandler} value={Price} required></input>
        </div>

        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm;
