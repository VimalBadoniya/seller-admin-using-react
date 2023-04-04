import React from "react";

const ProductList = (props) => {
  let TotalValue = 0;

  const deleteProduct = (id) => {
    props.onDelete(id);
  };
  return (
    <table>
      <thead>
        <tr>
          <td>Product ID</td>
          <td>Name</td>
          <td>Price</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {props.Data.map((product) => {
          product.Price = Number(product.Price);
          TotalValue += product.Price;

          return (
            <tr key={product.ID}>
              <td>{product.ID}</td>
              <td>{product.Name}</td>
              <td>{product.Price}</td>
              <td>
                <button
                  onClick={() => {
                    deleteProduct(product.ID);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{TotalValue}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProductList;
