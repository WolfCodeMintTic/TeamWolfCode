import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, { useState } from "react"

export default function EditModal(props) {
    const { showEditModal, setShowEditModal, data, setData, item, ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowEditModal(!showEditModal);

    const SubmitForm = (e) => {
        e.preventDefault()
        const idVenta = item.idVenta;
        const valorVenta = e.target.valorVenta.value;
        const id = item.id;
        const cantidad = e.target.cantidad.value;
        const precioUnitario = e.target.precioUnitario.value;
        const fechaVenta = e.target.fechaVenta.value;
        const cedulaCliente = e.target.cedulaCliente.value;
        const cliente = e.target.cliente.value;
        const vendedor = e.target.vendedor.value;
        const estado = e.target.estado.value;
        const ventaArray = [{ idVenta, valorVenta, id, cantidad, precioUnitario, fechaVenta, cedulaCliente, cliente, vendedor, estado }]
        let nuewData = data.map(obj => ventaArray.find(o => o.idVenta === obj.idVenta) || obj);
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
                    <FormGroup row>
                        <Label sm={4} htmlFor="idVenta">ID:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="idVenta"
                                readOnly
                                value={item.idVenta}
                            />
                        </Col>
                    </FormGroup>

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
                        <Label sm={4} htmlFor="id">ID de la venta</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                required
                                readOnly
                                name="id"
                                defaultValue={item.id}
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
                                defaultValue={item.PrecioUnitario}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="fechaVenta">Fecha de venta</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="datetime-local"
                                name="fechaVenta"
                                readOnly
                                defaultChecked={item.fechaVenta}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="cedulaCliente">Cedula</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="cedulaCliente"
                                readOnly
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
                                readOnly
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
                                readOnly
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