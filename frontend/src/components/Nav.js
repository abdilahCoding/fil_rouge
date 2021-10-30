import React from 'react'
import './styles/css/style.css'
import { Link } from "react-router-dom";





function Nav() {
  
    return (
    
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark navdash ">
        <Link className="navbar-brand" to="">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user"></i> admin </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <Link className="dropdown-item waves-effect waves-light" to="/Addusers">Ajouté utilisateur</Link>
                <Link className="dropdown-item " to="/DisplayUsers">Afficher utilisateur</Link>
                <Link className="dropdown-item " to="/labologup">labo utilisateur</Link>
              </div>
            </li>
            <li className="nav-item dropdown active">
              <a  className="nav-link dropdown-toggle " id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-md"></i> Docteur </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <Link className="dropdown-item waves-effect waves-light" to="/SearchPatients">Rechercher patient</Link>
                <Link className="dropdown-item " to="/TodayAppoints">rendez-vous aujourd'hui </Link>
              </div>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle " id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-injured"></i> patients </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <Link className="dropdown-item waves-effect waves-light" to="/SearchPatient">Rechercher patient</Link>
                <Link className="dropdown-item " to="/AllPatients">touts les patients </Link>
                <Link className="dropdown-item waves-effect waves-light" to="/TodayAppoints">rendez-vous aujourd'hui</Link>
                <Link className="dropdown-item " to="/AllAppointments">tous les rendez-vous </Link>
              </div>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle " id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-sign-out-alt"></i> Déconnecter </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <Link className="dropdown-item " to="">Log out</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>    
    )
}
export default Nav