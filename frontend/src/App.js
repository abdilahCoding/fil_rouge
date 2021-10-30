import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import addUseres from './components/Addusers';
import displyUser from './components/DisplyUsers';
import SearchUsers from './components/SearchUsers';
import TodayApoint from './components/TodayAppoints';
import AllAppointments from './components/AllAppointments';
import AllPatients from './components/AllPatients';
import NavHome from './components/home/NavHome';
import Labo from './components/labo';
import Logindash from './components/LoginDash';
import LoginLabo from './components/LoginLabo';
import SearchDocPat from './components/SearchDocPat';
import addAppoint from './components/addApoint';
import AddLabousers from './components/AddLabousers';



function App() {
  return (
    <div className="App">
    <Router>
     
<Switch>
 <Route path="/dashboard" exact   component={Dashboard}/>
<Route path="/Addusers" exact   component={addUseres}/>
<Route path="/DisplayUsers" exact   component={displyUser}/>
<Route path="/SearchPatient" exact   component={SearchUsers}/>
<Route path="/SearchPatients" exact   component={SearchDocPat}/>
<Route path="/TodayAppoints" exact   component={TodayApoint}/>
<Route path="/AllAppointments" exact   component={AllAppointments}/>
<Route path="/AllPatients" exact   component={AllPatients}/> 
<Route path="/AddAppointement/:id" exact   component={addAppoint}/> 
<Route path="/" exact   component={NavHome}/>
<Route path="/laboratoire" exact   component={Labo}/>
<Route path="/loginDashboard" exact component={Logindash}/>
 <Route path="/labologin" exact component={LoginLabo}/> 
 <Route path="/labologup" exact component={AddLabousers}/> 




{/* <Dash path="/dashbord"    component={Admin}/> */}
{/* <Route component={NotFound}/> */}
</Switch>



    </Router>
    </div>
  );
}

export default App;
