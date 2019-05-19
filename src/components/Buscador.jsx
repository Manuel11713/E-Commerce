import React,{Component} from 'react';
import './css/Buscador.css';
class Buscador extends Component{
    render(){
        return(
            <div id="buscador-container">
                <div className="container p-3">
                    <div className="row">
                        <div className="col">
                            <form>  
                                <div className="form-row">
                                    <div className="form-group col-10">
                                        <input className="form-control" type="text" placeholder="Comida Nutritiva" />
                                    </div>
                                    <div className="form-group col-2">
                                        <button type="submit" className="btn btn-info ">Buscar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Buscador;    
