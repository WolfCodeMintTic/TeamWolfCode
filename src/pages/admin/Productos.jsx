import React from 'react'
import { Table, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/productos.css';


const data = [
  { id: 1, Producto: "Camiseta", Descripcion: "Roja talla m", Valor: "10000", Estado: "Disponible" },
  { id: 2, Producto: "pantalon", Descripcion: "Negro talla 34", Valor: "80000", Estado: "Disponible" },
  { id: 3, Producto: "Camibuso", Descripcion: "Rosada talla s", Valor: "50000", Estado: "Disponible" },
  { id: 4, Producto: "Jean", Descripcion: "Azul talla s", Valor: "100000", Estado: "Disponible" },
  { id: 5, Producto: "Camiseta", Descripcion: "Blanco talla L", Valor: "109000", Estado: "Disponible" },
  { id: 6, Producto: "Sombrero", Descripcion: "Cafe talla unica", Valor: "20000", Estado: "Disponible" },
  { id: 6, Producto: "Sombrero", Descripcion: "Cafe talla unica", Valor: "20000", Estado: "Disponible" },
];
class Admin extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Producto: "",
      Descripcion: "",
      Valor: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].Producto = dato.Producto;
        arreglo[contador].Descripcion = dato.Descripcion;
        arreglo[contador].Valor = dato.Valor;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (


      <div className=" h-screen w-screen"><>

        <Container>
          <div className="flex flex-row items-center justify-between w-5/6  m-auto pb-0 pt-4">
            <div className="box">
              <div className="container-1 border-2 rounded-2xl">
                <span className="icon"><i className="fa fa-search"></i></span>
                <input className="rounded"  type="search" id="search" placeholder="Search..." />
              </div>
            </div>
            <br />
            <Button color="success" onClick={() => this.mostrarModalInsertar()}>Ingresar nuevo producto</Button>
          </div>
          <br />
          <Table cellPadding="10">
            <div className="text-black" ALIGN="center">
              <thead >
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Descripcion</th>
                  <th>Valor</th>
                  <th>Acción</th>
                </tr>
              </thead>

              <tbody>

                {this.state.data.map((dato) => (
                  <tr key={dato.id}>

                    <td>{dato.id}</td>
                    <td>{dato.Producto}</td>
                    <td>{dato.Descripcion}</td>
                    <td>{dato.Valor}</td>
                    <td>

                      <Button
                        color="primary"

                        onClick={() => this.mostrarModalActualizar(dato)}
                      >
                        Editar
                      </Button>{" "}
                      <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                    </td>


                  </tr>

                ))}

              </tbody>

            </div>
          </Table> 
        </Container>


        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Producto:
              </label>
              <input
                className="form-control"
                name="Producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Producto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Descripcion:
              </label>
              <input
                className="form-control"
                name="Descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Descripcion}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Valor:
              </label>
              <input
                className="form-control"
                name="Valor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Valor}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div ><h3>Insertar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Producto:
              </label>
              <input
                className="form-control"
                name="Producto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Descripcion:
              </label>
              <input
                className="form-control"
                name="Descripcion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Valor:
              </label>
              <input
                className="form-control"
                name="Descripcion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

      </>
      </div>
    );
  }
}

export default Admin
