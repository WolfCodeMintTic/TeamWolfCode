import React, { useState, useEffect } from 'react'
import { Table, Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/productos.css';
import AddModalProducto from 'components/AddModalProducto';
import EditModalProducto from 'components/EditModalProducto';
import axios from "axios";
import {nanoid} from 'nanoid'
const URL = "http://localhost:5000/productos"

const Productos = () => {
  const [data, setData] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  //Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [item, setItem] = useState(data)

  //funciones
  const insertFn = () => {
    setShowAddModal(true);
  }

  const editFn = (item) => {
    setShowEditModal(true);
    setItem(item);
  }

  const deleteFn = (idProducto) => {
    let opcion = window.confirm("Estas seguro que quiere eliminar el producto");
    if (opcion == true) {
      const newdata = data.filter(e => e.idProducto !== idProducto);
      setData(newdata)
    }
  }

  const loadAxios = async () => {
    await axios.get(URL).then(resp => {
      const nuewData = []
      const dataAxios = resp.data

      dataAxios.map(item => {
        nuewData.push(
          {
            producto: item.producto,
            descripcion: item.descripcion,
            valorUnitario: item.valorUnitario
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
          <Button color="primary" onClick={() => insertFn()} className="m-2">Registrar nuevo producto</Button>
        </div>
        <br />
        <br />
        <Table responsive className="tabla">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Descripcion</th>
              <th>ValorUnitario</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={nanoid()}>
                <td>{item._id}</td>
                <td>{item.producto}</td>
                <td>{item.descripcion}</td>
                <td>{item.valorUnitario}</td>
                <td>
                  <Button color="primary" onClick={() => editFn(item)}><i className="far fa-edit"></i></Button>{" "}
                  <Button color="danger" onClick={() => deleteFn(item.idProducto)}><i className="fas fa-trash"></i></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <AddModalProducto showAddModal={showAddModal} setShowAddModal={setShowAddModal} setData={setData} data={data} />
      <EditModalProducto showEditModal={showEditModal} setShowEditModal={setShowEditModal} setData={setData} data={data} item={item} />
    </>
  )
}

export default Productos
