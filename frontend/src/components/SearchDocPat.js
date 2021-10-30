import React, { useState } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Nav from './Nav';


const findPatient = yup.object().shape({
	cin: yup.string().required(),

  }).required();
  




function SearchDocPat() {
  
  
  const [data, setData] = useState('');
  const [resulat, setResulat] = useState('');

	const { register, handleSubmit, formState:{ errors } } = useForm({
		resolver: yupResolver(findPatient)
	  });

	  const onSubmit = async (data) => {
		
		 await axios.post('http://127.0.0.1:4000/api/patient/findPatient',{data})

		.then(response => { 
		    
      setResulat(response.data);
		})
		.catch(error => {
      setData(error.response.data);
		});
		
		
	  };
    return (
      <>
      <Nav />
        <div className='container' >
        <h1 className="text-center mt-5">Rechercher patient</h1>
        <div><p className='text-danger text-center '>{data ? data : null}</p></div>

<form onSubmit={handleSubmit(onSubmit)}  >        
  <div className="form-row">
    <div className="form-group col">
    {errors.cin ? errors.cin && <label class='text-danger'> {errors.cin.message} </label>  : <label >CIN</label>}

      <input type="text" {...register('cin')} className="form-control" placeholder="CIN" />
    </div>
  
  </div>
  
  
  <button type="submit"  name="Rechercher" className="btn btn-outline-success btn-lg d-block mx-auto">Rechercher</button>
</form> 

<table className="table mt-5">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Cin</th>
      <th scope="col">adresse</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
    
{
resulat ?
 
resulat.map(item =>( 

<tr>
<td>{item.name}</td>
<td>{item.lastName}</td>
<td>{item.cin}</td>
<td>{item.adress}</td>

<td>
  <button type="button" class="btn btn-success btn-sm mr-2">Modifier</button>
  <button type="button" class="btn btn-danger btn-sm">Dossier</button>
  <button type="button" class="btn btn-danger btn-sm">Ajouter</button>


</td>
</tr>
)

) : null }
    
    
    
    
  </tbody>
</table>

        
        
    </div>
    </>
    )
}
export default SearchDocPat