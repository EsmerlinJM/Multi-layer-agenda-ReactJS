import React, { Component } from 'react';

class Form extends Component {
    nombre = React.createRef();
    apellido = React.createRef();
    telefono = React.createRef();

    getData = (e) => {
        e.preventDefault();
        const response = {
            nombre: this.nombre.current.value,
            apellido: this.apellido.current.value,
            telefono: this.telefono.current.value
        }
        this.props.storeData(response);
    }

    render() {
        return (
            <div className="container">
                <form id="form" onSubmit={this.getData}>

                    <input ref={this.nombre} type="text" id="fname" name="firstname" placeholder="Tu nombre.."></input>

                    <input ref={this.apellido} type="text" id="lname" name="lastname" placeholder="Tu apellido.."></input>

                    <input ref={this.telefono} type="text" id="phone" name="phone" placeholder="Tu telefono"></input>

                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}

export default Form;