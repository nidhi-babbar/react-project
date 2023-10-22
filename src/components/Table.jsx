import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  function highlightColor(special) {
    
    if (special == "true") {
      return "green";
    }
   else{
    return "white";
   }
   
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
          <th className="expand">Description</th>
            <th>Expire Product</th>
             <th>Expire Date</th>
            <th>Category</th>
            <th>Price</th>
           
           
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx} style={{ backgroundColor: highlightColor(row.special) }}>
                <td >{row.description}</td>
                <td> {row.expireProduct}</td>
                <td >{row.expireDate}</td>
                
                <td>
                  <span >
                    {row.category}
                  </span>
                </td>
                <td >{row.price}</td>
                
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
