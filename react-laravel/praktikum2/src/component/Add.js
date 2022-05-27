import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

function Add() {
  const navigate =useNavigate();
  const [inputs, setInputs] =useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values,[name]:value}))
  }

  const submitForm = () =>{
    http.post('/users', inputs).then((res)=>{
      navigate('/');
    })
  }
    return (
      <div>   
          <div className="row">
            <label>Nama</label>
            <input type="text" name="name" 
                  value={inputs.name || ''}
                  onChange={handleChange}>
                    </input><br></br>
            
            <label>Komentar</label>
            <input type="text" name="comment"
                     value={inputs.comment || ''}
                     onChange={handleChange}>
            </input>

            <button type="button" onClick={submitForm} className="btn btn-info mt-3">Kirim</button>
          </div>
       </div>
    );
  }
  
export default Add;