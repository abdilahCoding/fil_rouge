import React, { useState } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { Link, useHistory } from "react-router-dom";
import './styles/css/login.css'


const SigninSchema = yup.object().shape({
	username: yup.string().required(),
	password: yup.string().required()
	
  }).required();
  

function LoginLabo(props) {
	const [Data, setData] = useState('');
	const { register, handleSubmit, formState:{ errors } } = useForm({
		resolver: yupResolver(SigninSchema)
	  });

	  const onSubmit = async (data) => {
		
		 await axios.post('http://127.0.0.1:4000/api/labo/laboSingnin',{data})

		.then(response => { 
		localStorage.setItem('jwt_info', JSON.stringify(response.data))
		  props.history.push('/laboratoire')
		})
		.catch(error => {
			setData(error.response.data)
		});
		
		
	  };
    return (
      <>
    <div className="containers">
	<div className="d-flex justify-content-center h-100">
		<div className="card mt-5">
			<div className="card-header">
				<h3 className='text-white'>Labo Sign In</h3>
			</div>
			<div className="card-body">
				<form onSubmit={handleSubmit(onSubmit)}  className='mt-5'>
				<div><p className='text-white '>{Data}</p></div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" {...register('username')} className="form-control" placeholder="Username"/>
					</div>
					<div>{errors.username && <p class='text-white '>{errors.username.message}</p>}</div>


					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" {...register("password")}   className="form-control" placeholder="password" />
						
					</div>
					<div>{errors.password && <p>{errors.password.message}</p>}</div>

					
					<div className="form-group ">
						<input type="submit" value="Login" className="btn login_btn d-block mx-auto " />
					</div>
				</form>
			</div>
			
		</div>
	</div>
  </div>

    </>
    )
}
export default LoginLabo