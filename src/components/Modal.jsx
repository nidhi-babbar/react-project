import React, { useState } from "react";

import "./Modal.css";

 

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      description: "",
      expireProduct:"",
      expireDate:"",
      category: "vegetable",
      price:"",
      special:false,
    }
  );
  const [errors, setErrors] = useState("");



  const validateForm = () => {
    if (formState.description && formState.expireProduct && formState.expireDate && formState.category && formState.price )   {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {

    if(e.target.type === 'checkbox')
    {
       if(e.target.checked){
        e.target.value=true
       }else{
        e.target.value=false
       }
       
    }

    setFormState({ ...formState, [e.target.name]:  e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  function checkField(special) {
    
    if (special == "true") {
      return "true";
    }else{
      return null;
    }

    
  }

  return (
   

    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
       
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expireProduct">ExpireProduct</label>
            <textarea
              name="expireProduct"
              onChange={handleChange}
              value={formState.expireProduct}
            />
          </div>

          <div className="form-group">
            <label htmlFor="expireDate">ExpireDate</label>
            <input type="date"
              name="expireDate"
              onChange={handleChange}
              value={formState.expireDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              onChange={handleChange}
              value={formState.category}
            >
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <textarea
              name="price"
              onChange={handleChange}
              value={formState.price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="special">Special</label>

            <input type="checkbox" name="special" onChange={handleChange}  value={formState.special} checked={checkField(formState.special)} ></input>
          
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
