import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './Header.jsx';
import Buscador from './Buscador.jsx';
import Navegacion from './Navegacion.jsx';
import Productos from './Productos.jsx';
class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Navegacion/>
                <Buscador/>

                <Switch>
                    <Route exact path={'/productos'} render={props=>{
                        return(
                            <Productos/>
                        )
                    }}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router; 