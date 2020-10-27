import React, { Component } from 'react' 
import { Req } from './requisitante.module.scss'

class Requisitante extends Component { 
    state = {
        cliente: null,
        morada: null,
        cp: null,
        localidade: null,
        solicitante: null,
        nipc: null,
        telefone: null
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
            <h2>Requisitante</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="cliente">Cliente:</label>
                    <input type="text" id="cliente" onChange={this.handleChange}/>
                    <label htmlFor="morada">Morada:</label>
                    <input type="text" id="morada" onChange={this.handleChange}/>
                    <label htmlFor="cp">Cp:</label>
                    <input type="text" id="cp" onChange={this.handleChange}/>
                    <label htmlFor="localidade">Localidade:</label>
                    <input type="text" id="localidade" onChange={this.handleChange}></input>
                    <label htmlFor="solicitante">Solicitante:</label>
                    <input type="text" id="solicitante" onChange={this.handleChange}></input>
                    <label htmlFor="nipc">NIPC:</label>
                    <input type="text" id="nipc" onChange={this.handleChange}></input>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="text" id="telefone" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Requisitante;