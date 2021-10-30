import React, { useState } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Nav from './Nav';


const findPatient = yup.object().shape({
	cin: yup.string().required(),

  }).required();






function Labo() {
  
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [id, setId] = useState('');
	const { register, handleSubmit, formState:{ errors} } = useForm({
		resolver: yupResolver(findPatient)
    
	  });
    	const { register:register2, handleSubmit:handleSubmit2, formState:{ errors:errors2  } } = useForm()

	  const onSubmit = async (data,e) => {
      console.log(data);
		 await axios.post('http://127.0.0.1:4000/api/patient/findPatient',{data})

		.then(response => { 
		   
      setData(response.data.length);
      setId(JSON.stringify(response.data[0]['_id']));
      
		})
		.catch(error => {
      setError(error.response.data);
		});
    e.target.reset();
		
	  };

    const file = async (data) => {
      
      let formData = new FormData();    //formdata object
 console.log(data.pdf[0]);
formData.append('pdf', data.pdf[0]);   //append the values with key, value pair
formData.append('id_patients', id);
// for (var pair of formData.entries()) {
//   console.log(pair[0]+ ', ' + pair[1]); 
// }  
await axios.post('http://127.0.0.1:4000/api/patient/findPatient',{data})

.then(response => { 
   
  setData(response.data.length);
  setId(JSON.stringify(response.data[0]['_id']));
  
})
.catch(error => {
  setError(error.response.data);
});


    }
    return (
      <>
      <Nav />
        <div className='container' >
        <h1 className="text-center mt-5">Ajouter les Analyses</h1>
        <div><p className='text-success text-center'>{data > 0 ? "Find it" : "Not Found it"}</p></div>
        <div><p className='text-danger text-center '>{error ? error : null}</p></div>
        <form onSubmit={handleSubmit(onSubmit)} >        
        <div className="form-group">
        {errors.cin ? errors.cin && <label className='text-danger'> {errors.cin.message} </label>  : <label >CIN</label>}
         <input type="text" {...register('cin')} className="form-control" placeholder="CIN" />


      </div>
 
  
  <button type="submit"  name="send" className="btn btn-outline-danger btn-lg d-block mx-auto">Rechercher</button>
</form>

{data > 0 ?
<form onSubmit={handleSubmit2(file)} className='mt-5'>          
  <div className="form-group">
    <label>Analayses</label>
    <input type="file" {...register2('pdf')}  className="form-control"  />
    {errors2.pdf ? errors2.pdf && <label className='text-danger'> {errors2.pdf.message} </label>  : <label >File</label>}

  </div>
  
  <button type="submit"  name="send" className="btn btn-outline-danger btn-lg d-block mx-auto">Envoyer</button>
</form>
      :null}
    </div>
    </>
    )
}
export default Labo