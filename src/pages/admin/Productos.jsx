import React from 'react'
import {Table, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/productos.css';
import 'components/Sidebar.jsx';

const data = [
    { ID: 1, Producto:"Camisa", Descripcion:"Estandar",Valor:"$78.000",Estado:"Disponible" },
    { ID: 2, Producto:"Camisa", Descripcion:"Estandar",Valor:"$78.000",Estado:"Disponible" },
    { ID: 3, Producto:"Camisa", Descripcion:"Estandar",Valor:"$78.000",Estado:"Disponible" },
    { ID: 4, Producto:"Camisa", Descripcion:"Estandar",Valor:"$78.000",Estado:"Disponible" },
    { ID: 5, Producto:"Camisa", Descripcion:"Estandar",Valor:"$78.000",Estado:"Disponible" },
    { ID: 6, Producto:"Camisa", Descripcion:"Estandar",Valor:"$78.000",Estado:"Disponible" },
    

   
];

class Admin extends React.Component{
   state={
       data:data
   }
    
    render(){
        return(<> 
        <Container>
        <br />    
        <Button color="primary">Registrar Producto</Button>
        <br /><br />
        <Table>
            <thead><tr><th>Id</th>
            <th>Prducto</th>
            <th>Descripcion</th>
            <th>Valor</th>
            <th>Estado</th></tr></thead>
            <tbody>
                {this.state.data.map((elemento)=>(
                    <tr>
                        <td>{elemento.ID}</td>
                        <td>{elemento.Producto}</td>
                        <td>{elemento.Descripcion}</td>
                        <td>{elemento.Valor}</td>
                        <td>{elemento.Estado}</td>
                        <td><Button color="primary">Editar</Button>
                        <Button color="danger">Eliminar</Button></td>
                    </tr>
                ))}    
                    


            </tbody>
        </Table>
    </Container>
        </>)
    }
 
            
        
    }


export default Admin