import "bootstrap/dist/css/bootstrap.min.css";
import {crearProducto} from 'utils/api'
import {
    Button, Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup
} from "reactstrap";
import React, { useRef } from "react"

export default function AddModalProducto(props) {
    const { showAddModal, setShowAddModal, data, setData} = props;
    const toggle = () => setShowAddModal(!showAddModal);

    const form = useRef(null)
    const SubmitForm = async(e) => {
        e.preventDefault()
        const fd = new FormData(form.current);
        const nuevoProducto ={};
        fd.forEach((value, key) => {
            nuevoProducto[key] = value;
        });
        console.log("fomr datas", nuevoProducto)
        await crearProducto({
            producto: nuevoProducto.producto, 
            descripcion: nuevoProducto.descripcion, 
            valorUnitario: nuevoProducto.valorUnitario
        },
        (response)=>{
            console.log(response.data);
            console.log("producto creado")
        },
        (error) =>{
            console.error(error);
        });
        setShowAddModal(false)
    }

    return (
        <Modal isOpen={showAddModal} toggle={toggle}>
            <form ref={form} onSubmit={SubmitForm}>
                <ModalHeader>
                    <div><h3>Registrar nuevo producto</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="producto">Producto:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="text"
                                name="producto"
                                placeholder="Camisa"
                                required
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={6} htmlFor="descripcion">Descripcion del producto:</Label>
                        <Col sm={12}>
                            <input className="form-control" type="text"
                                required
                                placeholder="cualquier cosa...."
                                name="descripcion"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row className='mt-2'>
                        <Label sm={4} htmlFor="valorUnitario">Valor por unidad:</Label>
                        <Col sm={12}>
                            <input className="form-control"
                                type="number"
                                name="valorUnitario"
                                placeholder="25000"
                                required
                            />
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