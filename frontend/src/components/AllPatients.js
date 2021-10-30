import React,{useEffect,useState} from 'react'
import Nav from './Nav';
import axios from 'axios'





function AllPatients() {
  const [allpatinets, setAllpatinets] = useState()

   
  useEffect(() => {
    let access_token = JSON.parse(localStorage.getItem('jwt_info'))  
    let data = async ()=>{

      await axios.get('http://127.0.0.1:4000/api/patient/allPatient',{
        headers: {
          'auth-token': access_token
        }})
        .then(response => { 
          setAllpatinets(response.data)
          console.log(response.data);
    
  
          })
          .catch(error => {
            // console.log(error.response.data)
          });
        
     }
  
     data();
  },[])
    return (
      <>
      <Nav />
        <div className='container' >
        <h1 className="text-center mt-5">touts les patients </h1>
        

        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Nom </th>
      <th scope="col">Prenpom</th>
      <th scope="col">Cin</th>
      <th scope="col">Adresse</th>

    </tr>
  </thead>
  <tbody>
    
    {

allpatinets ?
 
allpatinets.map((item,index) =>( 

<tr key={index}>
<td>{item.name}</td>
<td>{item.lastName}</td>
<td>{item.cin}</td>
<td>{item.adress}</td>


</tr>
)

) : "empty data" }
    
    
    
    
  </tbody>
</table>

    </div>
    </>
    )
}
export default AllPatients