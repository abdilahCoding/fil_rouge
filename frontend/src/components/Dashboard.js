import React, { useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Nav from './Nav';


const AddPatientSchema = yup.object().shape({
	cin: yup.string().required(),
	name: yup.string().required(),
    lastName: yup.string().required(),
    adress: yup.string().required(),
    date: yup.string().required()


	
  }).required();
  





function Dashboard() {
  
    
  const [data, setData] = useState(null);
  const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(AddPatientSchema)
    });

    const onSubmit = async (data) => {
      
       await axios.post('http://127.0.0.1:4000/api/patient/insertPatient',{data})

      .then(response => { 
        setData(response.data)
       })
      .catch(error => {
        setData(error.response.data)

      });
      
      
    };

    return (
        <>
        <Nav />
        <div className="container">
         
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-blue">
                    <div className="inner">
                        <h3> 13436 </h3>
                        <p> Student Strength </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <Link to='/' className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>

            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-green">
                    <div className="inner">
                        <h3> ₹185358 </h3>
                        <p> Today’s Collection </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-money" aria-hidden="true"></i>
                    </div>
                    <Link to="/" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-orange">
                    <div className="inner">
                        <h3> 5464 </h3>
                        <p> New Admissions </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </div>
                    <Link to="" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-red">
                    <div className="inner">
                        <h3> 723 </h3>
                        <p> Faculty Strength </p>
                    </div>
                    <div className="icon">
                        <i className="fa fa-users"></i>
                    </div>
                    <Link to="" className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
        </div>
        <h1 className="text-center">Ajouter un patient</h1>
        <div><p className='text-danger text-center '>{data ? data : null}</p></div>

<form onSubmit={handleSubmit(onSubmit)}>        
<div className="form-row">
<div className="form-group col-md-6">
{errors.name ? errors.name && <label class='text-danger'> {errors.name.message} </label>  : <label >name</label>}

<input type="text" {...register('name')} className="form-control" placeholder="Enter le Nom" />
</div>
<div className="form-group col-md-6">
{errors.lastName ? errors.lastName && <label class='text-danger'> {errors.lastName.message} </label>  : <label >lastName</label>}
<input type="text" {...register('lastName')} className="form-control" placeholder="Enter Prenom" />
</div>
</div>
<div className="form-row">
<div className="form-group col-md-6">
{errors.cin ? errors.cin && <label class='text-danger'> {errors.cin.message} </label>  : <label >Cin</label>}
<input type="text" {...register('cin')} className="form-control" placeholder="Enter Cin" />
</div>
<div className="form-group col-md-6">
{errors.adress ? errors.adress && <label class='text-danger'> {errors.adress.message} </label>  : <label >adress</label>}
<input type="text" {...register('adress')} className="form-control" placeholder="Enter l'adresse" />
</div>
</div>
<div className="form-row">
<div className="form-group col">
{errors.date ? errors.date && <label class='text-danger'> {errors.date.message} </label>  : <label >Date</label>}
<input type="date" {...register('date')} className="form-control"  />
</div>

</div>


<button type="submit"  name="send" className="btn btn-outline-danger btn-lg d-block mx-auto">Save</button>
</form> 
    </div>
    </>
    )
}
export default Dashboard 


  
  
