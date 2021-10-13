import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, { useState } from "react"

export default function AddModal(props) {
    const { showAddModal, setShowAddModal, data, setData, ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowAddModal(!showAddModal);

    const SubmitForm = (e) => {
        e.preventDefault()
        const idVenta = data.length + 1;
        const valorVenta = e.target.valorVenta.value;
        const id = data.length + 1;
        const cantidad = e.target.cantidad.value;
        const precioUnitario = e.target.precioUnitario.value;
        const fechaVenta = e.target.fechaVenta.value;
        const cedulaCliente = e.target.cedulaCliente.value;
        const cliente = e.target.cliente.value;
        const vendedor = e.target.vendedor.value;
        const estado = e.target.estado.value;
        setData([{ idVenta, valorVenta, id, cantidad, precioUnitario, fechaVenta, cedulaCliente, cliente, vendedor, estado }, ...data]);
        setShowAddModal(false)
    }


    return (
        <Modal isOpen={showAddModal} toggle={toggle}>
            <Form onSubmit={SubmitForm}>
                <ModalHeader>
                    <div><h3>Registrar nueva venta</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="valorVenta">Valor de la venta:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="valorVenta"
                                placeholder="50000"
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="cantidad">Cantidad:</Label>
                        <Col sm={12}>
                            <input className="form-control" type="number"
                                required
                                placeholder="5"
                                name="cantidad"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="precioUnitario">Precio por unitario:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="precioUnitario"
                                placeholder="25000"
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="fechaVenta">Fecha de venta</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="datetime-local"
                                name="fechaVenta"
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="cedulaCliente">Cedula:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="cedulaCliente"
                                placeholder="1111111111"
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={4} htmlFor="cliente">Cliente:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                name="cliente"
                                placeholder="nombre aqui..."
                                required
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4} htmlFor="vendedor">Vendedor:</Label>
                        <Col sm={12}>
                            <input className="form-control" 
                            type="email"
                                name="vendedor"
                                placeholder="correo@aqui.com"
                                required
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4} htmlFor="estado">Estado de la venta:</Label>
                        <Col sm={12}>
                            <Input type="select" name="estado" required defaultValue={0}>
                                <option disabled value={0}>Seleccione una opcion</option>
                                <option>En proceso</option>
                                <option>Cancelada</option>
                                <option>Entregado</option>
                            </Input>
                        </Col>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Registrar</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}