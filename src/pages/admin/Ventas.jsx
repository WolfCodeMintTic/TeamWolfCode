import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table, Button, Container,
} from "reactstrap";
import AddModal from 'components/AddModal';
import EditModal from 'components/EditModal';
import React, { useState } from "react"
import axios from "axios";

const Ventas = () => {
    const initialState = [
        { idVenta: 1, valorVenta: 50000, id: 1, cantidad: 2, precioUnitario: 250000, fechaVenta: "05/02/2000 04:33 p.m", cedulaCliente: 1111111111, cliente: "pepito", vendedor: "vend@gmail.com", estado: "En progeso" }
    ]
    const [data, setData] = useState(initialState)
    //Modal
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

    const deleteFn = (idVenta) => {
        let opcion = window.confirm("Estas seguro que quieres eliminar la venta");
        if (opcion == true) {
            const newdata = data.filter(e => e.idVenta !== idVenta);
            setData(newdata)
        }
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
                <Table responsive className="tabla">
                    <thead>
                        <tr>
                            <th>IDVenta</th>
                            <th>ValorTotal</th>
                            <th>ID</th>
                            <th>Cantidad</th>
                            <th>PrecioUnitario</th>
                            <th>FechaVenta</th>
                            <th>CC-Cliente</th>
                            <th>Cliente</th>
                            <th>Vendedor</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.idVenta}>
                                <th>{item.idVenta}</th>
                                <td>{item.valorVenta}</td>
                                <td>{item.id}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.precioUnitario}</td>
                                <td>{item.fechaVenta}</td>
                                <td>{item.cedulaCliente}</td>
                                <td>{item.cliente}</td>
                                <td><a href={`mailto:${item.vendedor}`}>{item.vendedor}</a></td>
                                <td>{item.estado}</td>
                                <td>
                                    <Button color="primary" onClick={() => editFn(item)}><i className="far fa-edit"></i></Button>{" "}
                                    <Button color="danger" onClick={() => deleteFn(item.id)}><i className="fas fa-trash"></i></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <AddModal showAddModal={showAddModal} setShowAddModal={setShowAddModal} setData={setData} data={data} />
            <EditModal showEditModal={showEditModal} setShowEditModal={setShowEditModal} setData={setData} data={data} item={item} />
        </>
    )
}

export default Ventas
