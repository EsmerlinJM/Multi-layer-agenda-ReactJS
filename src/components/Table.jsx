import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div className="historial space">
                <table className="table">
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                </tr>
                { this.props.data.map(d => (
                    <tr key={d.key}>
                        <td>{ d.nombre }</td>
                        <td>{ d.apellido }</td>
                        <td>{ d.telefono }</td>
                    </tr>
                 ))}
                </table>
            </div>
        );
    }
}

export default Table;