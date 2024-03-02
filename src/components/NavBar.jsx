import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/inicio" className="nav-link" >Inicio secion</Link>
                               
                            </li>

                            <li className="nav-item">
                                <Link to="/tabla" className="nav-link" >Carreras</Link>
                               
                            </li>
                            <li className="nav-item">
                            <Link to="/registro" className="nav-link" >Registrate</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
