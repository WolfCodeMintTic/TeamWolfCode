import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import { actualizarVenta } from "utils/ventas/api";
import React, { useState } from "react"

export default function EditModal(props) {
    const { showEditModal, setShowEditModal, data, setData, item, ...rest } = props;
    const toggle = () => setShowEditModal(!showEditModal);

    const SubmitForm = async (e) => {
        e.preventDefault()
        await actualizarVenta(
            item._id,
            {
                valorVenta: e.target.valorVenta.value,
                identificador: e.target.identificador.value,
                cantidad: e.target.cantidad.value,
                precioUnitario: e.target.precioUnitario.value,
                fechaVenta: e.target.fechaVenta.value,
                cedulaCliente: e.target.cedulaCliente.value,
                cliente: e.target.cliente.value,
                vendedor: e.target.vendedor.value,
                estado: e.target.estado.value
            },
            (response) => {
                console.log("venta modificado")
                console.log(response.data);
            },
            (error) => {
                console.log("error modificando venta")
                console.log(error)
            }
        )
        const _id = item._id;
        const valorVenta = e.target.valorVenta.value;
        const identificador = item.identificador;
        const cantidad = e.target.cantidad.value;
        const precioUnitario = e.target.precioUnitario.value;
        const fechaVenta = e.target.fechaVenta.value;
        const cedulaCliente = e.target.cedulaCliente.value;
        const cliente = e.target.cliente.value;
        const vendedor = e.target.vendedor.value;
        const estado = e.target.estado.value;
        const ventaArray = [{ _id, valorVenta, identificador, cantidad, precioUnitario, fechaVenta, cedulaCliente, cliente, vendedor, estado }]
        let nuewData = data.map(obj => ventaArray.find(o => o._id === obj._id) || obj);
        setData(nuewData);
        setShowEditModal(false)
    }
    console.log("data:", data)

    return (
        <Modal isOpen={showEditModal} toggle={toggle}>
            <Form onSubmit={SubmitForm}>
                <ModalHeader>
                    <div><h3>Editar venta</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="valorVenta">Valor total de venta</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="valorVenta"
                                defaultValue={item.valorVenta}
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="identificador">ID de la venta</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                required
                                name="identificador"
                                defaultValue={item.identificador}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="cantidad">Cantidad</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                required
                                name="cantidad"
                                defaultValue={item.cantidad}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="precioUnitario">Precio por unidad</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="precioUnitario"
                                defaultValue={item.precioUnitario}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="fechaVenta">Fecha de venta</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="datetime-local"
                                name="fechaVenta"
                                defaultValue={item.fechaVenta}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="cedulaCliente">Cedula</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="cedulaCliente"
                                defaultValue={item.cedulaCliente}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={4} htmlFor="cliente">Cliente</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                name="cliente"
                                defaultValue={item.cliente}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4} htmlFor="vendedor">Vendedor</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="email"
                                name="vendedor"
                                defaultValue={item.vendedor}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4} htmlFor="estado">Estado de la venta:</Label>
                        <Col sm={12}>
                            <Input type="select" name="select" name="estado" required
                                defaultValue={item.estado}
                            >
                                <option disabled>Seleccione una opcion</option>
                                <option>En proceso</option>
                                <option>Cancelada</option>
                                <option>Entregado</option>
                            </Input>
                        </Col>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Guardar</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}