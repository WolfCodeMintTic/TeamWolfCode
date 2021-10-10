import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table, Input, Button, Container, Modal, ModalBody, ModalHeader,
    FormGroupm, ModalFooter, FormGroup, NavbarText
} from "reactstrap";
import AddModal from 'components/AddModal';
import EditModal from 'components/EditModal';
import React, { useState } from "react"

const Ventas = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);


    const [item, setItem] = useState({})

    const insertFn = () => {
        setShowAddModal(true);
    }

    const editFn = (item) => {
        setShowEditModal(true);
        setItem(item);
    }

    const deleteFn = () => {
        let opcion = window.confirm("Estas seguro que quieres eliminar la venta");
        // if (opcion == true) {
        //     const newdata = data.filter(e => e.id !== id);
        //     setData(newdata)
        // }
    }


    return (
        <>
            <Container>
                <br />
                <div className="flex justify-between ">
                    <div className="w-2/4">
                        <div className="border-2 rounded-xl mt-4">
                            <span className="w-1/12"><i className="fa fa-search"></i></span>
                            <input type="search"
                                className="w-11/12"
                                id="search" placeholder="Search..." />
                        </div>
                    </div>
                    <button>
                    </button>
                    <Button color="primary" onClick={() => insertFn()} className="m-2">Registrar nueva venta</Button>
                </div>
                <br />
                <br />
                <Table responsive>
                    <thead>
                        <th>ID</th>
                        <th>ValorTotal</th>
                        <th>IDVenta</th>
                        <th>Cantidad</th>
                        <th>PrecioUnitario</th>
                        <th>FechaVenta</th>
                        <th>CC-Cliente</th>
                        <th>Cliente</th>
                        <th>Vendedor</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>50000</td>
                            <td>1</td>
                            <td>2</td>
                            <td>25000</td>
                            <td>05/12/1997</td>
                            <td>1111111111</td>
                            <td>Pepito</td>
                            <td>vendedor@vendedor.com</td>
                            <td>
                                <Button color="primary" onClick={() => editFn(item)}><i class="far fa-edit"></i></Button>{" "}
                                <Button color="danger" onClick={() => deleteFn(item.id)}><i class="fas fa-trash"></i></Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <AddModal showAddModal={showAddModal} setShowAddModal={setShowAddModal} />
            <EditModal showEditModal={showEditModal} setShowEditModal={setShowEditModal} />
        </>
    )
}

export default Ventas
