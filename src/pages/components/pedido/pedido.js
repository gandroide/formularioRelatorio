import React, { Component } from 'react';

class Pedido extends Component {
    state = {
        asistencia: null,
        instlacion: null,
        reparacion: null,
        presupuesto: null,
        desarrollo: null,
        detalles: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div>
            <h2>Pedido:</h2>
                <form onSubmit={this.handleSubmit}>
                <label for="asistencia">Assistência</label>
                <input id="asistencia" type="checkbox" onChange={this.handleChange}></input>
                <label for="instalacion">Instalação</label>
                <input id="instalacion" type="checkbox" onChange={this.handleChange}></input>
                <label for="reparacion">Reparação</label>
                <input id="reparacion" type="checkbox" onChange={this.handleChange}></input>
                <label for="presupuesto">Orçamento</label>
                <input id="presupuesto" type="checkbox" onChange={this.handleChange}></input>
                <label for="desarrollo">Desenvolvimento</label>
                <input id="desarrollo" type="checkbox" onChange={this.handleChange}></input>
                <input id="detalles" type="text" onChange={this.handleChange}></input>{/*CONFIRMAR*/}
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Pedido;