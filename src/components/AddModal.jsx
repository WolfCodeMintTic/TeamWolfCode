import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Input
} from "reactstrap";
import { crearVenta } from "utils/vendedores/api";
import React, { useRef } from "react"

export default function AddModal(props) {
    const { showAddModal, setShowAddModal, data, setData} = props;
    const toggle = () => setShowAddModal(!showAddModal);

    const form = useRef(null)
    const SubmitForm = async(e) => {
        e.preventDefault()
        const fd = new FormData(form.current);
        const nuevaVenta = {};
        fd.forEach((value, key) => {
            nuevaVenta[key] = value;
        });
        console.log("form datas", nuevaVenta);
        await crearVenta({
            valorVenta: nuevaVenta.valorVenta,
            identificador: nuevaVenta.identificador,
            cantidad: nuevaVenta.cantidad,
            precioUnitario: nuevaVenta.precioUnitario,
            fechaVenta: nuevaVenta.fechaVenta,
            cedulaCliente: nuevaVenta.cedulaCliente,
            cliente: nuevaVenta.cliente,
            vendedor: nuevaVenta.vendedor
        },
            (response) => {
                console.log(response.data);
                console.log("venta creada")
            },
            (error) => {
                console.error(error);
            }
        );
        setShowAddModal(false)
    }

    return (
        <Modal isOpen={showAddModal} toggle={toggle}>
            <form ref={form} onSubmit={SubmitForm}>
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
                                min="50"
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="identificador">Identificador:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                name="identificador"
                                placeholder="a5f"
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
                                min="1"
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
                                min="50"
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
                                placeholder="correo aca..."
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
            </form>
        </Modal>
    )
}