import React, { useState } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Nav from './Nav';


const AddUsersSchema = yup.object().shape({
	username: yup.string().required(),
	password: yup.string().required(),
  type: yup.string().required()
	
  }).required();
  


function Addusers() {
 
  const [data, setData] = useState('');
	const { register, handleSubmit, formState:{ errors } } = useForm({
		resolver: yupResolver(AddUsersSchema)
	  });

	  const onSubmit = async (data) => {
		
		 await axios.post('http://127.0.0.1:4000/api/user/singnup',{data})

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
        <h1 className="text-center mt-5">Ajouter des utilisateurs</h1>
        <div><p className='text-danger text-center '>{data ? data : null}</p></div>

<form onSubmit={handleSubmit(onSubmit)} >        
  <div className="form-row">
    <div className="form-group col-md-6">
    {errors.username ? errors.username && <label class='text-danger'> {errors.username.message} </label>  : <label >Utilisateur</label>}
      
      <input type="text" {...register('username')} className="form-control" placeholder="le Nom" />
    </div>
    <div className="form-group col-md-6">

    {errors.password ? errors.password && <label class='text-danger'> {errors.password.message} </label>  : <label >Mot de passe</label>}

      <input type="text" name="password" {...register('password')} className="form-control" placeholder="mot de passe" />
    </div>
  </div>
  <div className="form-group">

  {errors.type ? errors.type && <label class='text-danger'> {errors.type.message} </label>  : <label >Type</label>}

    <select defaultValue=''  {...register('type')} className="form-control">
        <option value ="" disabled selected>Select..</option>
        <option value ="admin">Admin</option>
        <option value ="user">User</option>
      </select>  </div>
  
  <button type="submit"  name="send" className="btn btn-outline-danger btn-lg d-block mx-auto">Save</button>
</form> 
        
        
    </div>
    </>
    )
}
export default Addusers