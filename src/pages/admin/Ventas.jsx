import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table, Button, Container,
} from "reactstrap";
import AddModal from 'components/AddModal';
import EditModal from 'components/EditModal';
import React, { useState, useEffect } from "react"
import axios from "axios";

const Ventas = () => {
    const [data, setData] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)
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
        let opcion = window.confirm("Estas seguro que quiere eliminar la venta");
        if (opcion == true) {
            const newdata = data.filter(e => e.idVenta !== idVenta);
            setData(newdata)
        }
    }

    const loadAxios = async () => {
        await axios.get("http://localhost:5000/productos/").then(resp => {
            const nuewData = []
            const dataAxios = resp.data

            dataAxios.map(item => {
                nuewData.push(
                    {
                        idVenta: item.idVenta,
                        valorVenta: item.valorVenta,
                        id: item.id,
                        cantidad: item.cantidad,
                        precioUnitario: item.precioUnitario,
                        fechaVenta: item.fechaVenta,
                        cedulaCliente: item.cedulaCliente,
                        cliente: item.cliente,
                        vendedor: item.vendedor,
                        estado: " "
                    },
                )
            })
            setData(nuewData)
        });
    }

    useEffect(() => {
        if (ejecutarConsulta) {
            loadAxios();
        }
    }, [ejecutarConsulta]);

    return (
        <>
            <Container>
                <br />
                <div className="flex justify-between ">
                    <div className="w-2/4">
                        <div className="border-2 rounded-xl mt-4">
                            <span className="w-1/12"><i className="fa fa-search"></i></span>
                            <input type="search"
                                className="w-11/12 py-1"
                                placeholder="Search..." />
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
                                    <Button color="danger" onClick={() => deleteFn(item.idVenta)}><i className="fas fa-trash"></i></Button>
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