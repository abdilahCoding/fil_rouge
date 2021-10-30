import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Nav from './Nav';


const AddApp = yup.object().shape({
	date: yup.string().required(),

  }).required();
  


function AddAppoint() {
  const idAppoint =useParams().id
  const [data, setData] = useState('');
	const { register, handleSubmit, formState:{ errors } } = useForm({
		resolver: yupResolver(AddApp)
	  });

	  const onSubmit = async (data) => {
      const resulat ={
        id:idAppoint,
        date:data.date
      }
		
		 await axios.post('http://127.0.0.1:4000/api/appt/addppoints',{resulat})

		.then(response => { 
		    
      setData(response.data);
		})
		.catch(error => {
      setData(error.response.data);
		});
		
		
	  };
    return (
      <>
      <Nav />
        <div className='container' >
        <h1 className="text-center mt-5">Ajouter un rendez-vous</h1>
        <div><p className='text-danger text-center '>{data ? data : null}</p></div>

<form onSubmit={handleSubmit(onSubmit)} >        
  
  <div className="form-group">

  {errors.date ? errors.date && <label class='text-danger'> {errors.date.message} </label>  : <label >Date</label>}

    <input type='date'  {...register('date')} className="form-control"/>

    </div>
  <button type="submit"  name="send" className="btn btn-outline-danger btn-lg d-block mx-auto">Save</button>
</form> 
        
        
    </div>
    </>
    )
}
export default AddAppoint