import React,{useEffect,useState} from 'react'
import Nav from './Nav';
import axios from 'axios'




function TodayApoint() {

     const [data, setData] = useState(null)
     const [error, setError] = useState(null)
   
    useEffect(() => {
      const onSubmit = async () => {
		
        await axios.get('http://127.0.0.1:4000/api/appt/todayAppoint')
    
       .then(response => { 
          setData(response.data);
       })
       .catch(error => {
         setError(error.response.data);
       });
       
       };
       onSubmit();
    },[])
  
    return (
      <>
      <Nav />
        <div className='container' >
        <h1 className="text-center mt-5">rendez-vous aujourd'hui</h1>
        <div><p className='text-danger text-center '>{error ? error : null}</p></div>

     
<table className="table mt-5">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Cin</th>
      <th scope="col">Adresse</th>
      <th scope="col">La Date</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
    
{
data ?
 
data.map(item =>( 

<tr>
<td>{item.id_patient.name}</td>
<td>{item.id_patient.lastName}</td>
<td>{item.id_patient.cin}</td>
<td>{item.id_patient.adress}</td>
<td>{item.date}</td>

<td>
  <button type="button" class="btn btn-danger btn-sm mr-2">Supprimer</button>
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
export default TodayApoint