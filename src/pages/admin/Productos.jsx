import React from 'react'
import {Table, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/productos.css';
import 'components/Sidebar.jsx';

const data =[
    { ID: 1, Producto:"Camisa", Descripcion:"Estandar",Valor:"$78.000",Estado:"Disponible" }
   
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
            <th></th></tr></thead>
            <tbody></tbody>
        </Table>
    </Container>
        </>)
    }
 
            
        
    }


export default Admin