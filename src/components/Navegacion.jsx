import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './css/Navegacion.css';

class Navegacion extends Component{
    
    render(){
        console.log(window.location)

        return(
            <nav className="navbar navbar-expand-lg " id="container-navegacion">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">Menu</span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex justify-content-center w-100">
                    <Link to={'/'} className="nav-item nav-link active" href="#">Inicio <span className="sr-only">(current)</span></Link>
                    <Link to={'/productos'} className="nav-item nav-link" href="#">Productos</Link>
                    <Link to={'/nutricion'} className="nav-item nav-link" href="#">Nutrición</Link>
                    <Link to={'/blog'} className="nav-item nav-link" href="#">Blog</Link>
                    <Link to={'/recetas'} className="nav-item nav-link" href="#">Recetas</Link>
                    <Link to={'preguntrasfrecuentes'} className="nav-item nav-link" href="#">Preguntas Frecuentes</Link>
                </div>
            </div>
            </nav> 
        );
    }
}
export default Navegacion;