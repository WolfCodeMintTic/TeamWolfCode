import React from 'react'
import { Table, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/productos.css';


const data = [
  { id: 1, Nombre: "Lorena", Correo: "lorena123@gmail.com", Estado: "boton", Rol: "Admin" },
  { id: 2, Nombre: "Franklin", Correo: "franklin123@gmail.com", Estado: "boton", Rol: "Vendedor" },
];
class Admin extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Nombre: "",
      Correo: "",
      Estado: "",
      Rol: "",
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
        arreglo[contador].Nombre = dato.Nombre;
        arreglo[contador].Correo = dato.Correo;
        arreglo[contador].Estado = dato.Estado;
        arreglo[contador].Rol = dato.Rol;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar el usuario " + dato.id);
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
            <Button color="success" onClick={() => this.mostrarModalInsertar()}>Ingresar nuevo usuario</Button>
          </div>
          <br />
          <Table cellPadding="10">
            <div className="text-black" ALIGN="center">
              <thead >
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>estado</th>
                  <th>Rol</th>
                  <th>Acción</th>
                </tr>
              </thead>

              <tbody>

                {this.state.data.map((dato) => (
                  <tr key={dato.id}>

                    <td>{dato.id}</td>
                    <td>{dato.Nombre}</td>
                    <td>{dato.Correo}</td>
                    <td>{dato.Estado}</td>
                    <td>{dato.Rol}</td>
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
                Nombre:
              </label>
              <input
                className="form-control"
                name="Nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Nombre}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Correo:
              </label>
              <input
                className="form-control"
                name="Correo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Correo}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Estado:
              </label>
              <input
                className="form-control"
                name="Estado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Estado}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Rol:
              </label>
              <input
                className="form-control"
                name="Rol"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Rol}
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
                Nombre:
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
                Correo:
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
                Estado:
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
                Rol:
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