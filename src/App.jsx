import { useState } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const data=[
    {
     description: "Tomatoes",
      expireProduct: "Yes",
      expireDate: "2023-10-22",
      category:"vegetable",
      price:"2",
      special:"true",
           
    },
    {
      description: "Meat1",
      expireProduct: "No",
      expireDate: "2023-10-21",
      category:"meat",
      price:"5",
      special:"true",
    },
    {
      description: "Onion",
      expireProduct: "Yes",
      expireDate: "2023-10-20",
      category:"vegetable",
      price:"9",
      special:"false",
    },
  ]
  const [rows, setRows] = useState(data);
  const [rowToEdit, setRowToEdit] = useState(null);



  const handleDeleteRow = (targetIndex) => {

    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    
    setRowToEdit(idx);

    setModalOpen(true);
  };

  function handleFilter(event) {
   
    const newData=data.filter(row=>{
      
      return row.category.includes(event.target.value)
    })
    setRows(newData)
  }


  const handleSubmit = (newRow) => {
   
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
           
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
        
  };

  return (
    <div className="App">
      <div ><select onChange={handleFilter}   >
              <option value="">-</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
              <option value="furniture">Furniture</option>
            </select></div>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
