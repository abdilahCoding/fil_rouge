import React,{useEffect, useState} from 'react'
import Nav from './Nav';
import axios from 'axios'



function DisplyUser() {
  const [allusers, setAllUsers] = useState()

    const deleteUser = async (e) => {
      let id = e.target.id;
		 await axios.post('http://127.0.0.1:4000/api/user/deleteUser',{id})

     .then(response => { 
     
      console.log(response.data)
    })
     .catch(error => {
       console.log(error.response.data)
     });
     
    }

  useEffect(() => {
    let access_token = JSON.parse(localStorage.getItem('jwt_info'))  

    let data = async ()=>{

      await axios.get('http://127.0.0.1:4000/api/user/allUsers',{
        headers: {
          'auth-token': access_token
        }})
        .then(response => { 
          setAllUsers(response.data.users)
    
  
          })
          .catch(error => {
            console.log(error.response)
          });
        
     }
     data();
  },[allusers])
    return (
      <>
      <Nav />
        <div className='container' >
        <h1 className="text-center mt-5">Afficher utilisateur</h1>

        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Nom utilisateur</th>
      <th scope="col">password</th>
      <th scope="col">Role</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
    {

allusers ?
 
allusers.map(item =>( 

<tr>
<td>{item.username}</td>
<td>{item.password}</td>
<td>{item.type}</td>
<td>
  <button type="button" class="btn btn-success btn-sm mr-2">Modifier</button>
  <button type="button" id={item._id} onClick={deleteUser} class="btn btn-danger btn-sm">Supprimer</button>

</td>
</tr>
)

) : "empty data" }
    
    
    
    
  </tbody>
</table>

    </div>
    </>
    )
}
export default DisplyUser