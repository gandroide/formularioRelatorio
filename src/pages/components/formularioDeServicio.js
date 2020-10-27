import React, { Component } from 'react' 

class Relatorio extends Component { 
    state = {
        cliente: null,
        morada: null,
        cp: null,
        localidade: null,
        solicitante: null,
        nipc: null,
        telefone: null,
        asistencia: null,
        instlacion: null,
        reparacion: null,
        presupuesto: null,
        desarrollo: null,
        detalles: null,
        utilizador: null,
        password: null,
        equipo: null,
        moddelo: null,
        numeroSerie: null,
        tecnico: null,
        horaInicio: null,
        horaFin: null,
        deslocacion: null,
        totalHoras: null,
        totalKilometros: null,
        normal: null,
        especializada: null,
        descripcion: null,
        codigo: null,
        descripcion: null,
        qtd: null,
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
            <h2>Requisitante:</h2>
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
                    <h2>Pedido:</h2>
                    <label htmlFor="asistencia">Assistência</label>
                    <input id="asistencia" type="checkbox" onChange={this.handleChange}></input>
                    <label htmlFor="instalacion">Instalação</label>
                    <input id="instalacion" type="checkbox" onChange={this.handleChange}></input>
                    <label htmlFor="reparacion">Reparação</label>
                    <input id="reparacion" type="checkbox" onChange={this.handleChange}></input>
                    <label htmlFor="presupuesto">Orçamento</label>
                    <input id="presupuesto" type="checkbox" onChange={this.handleChange}></input>
                    <label htmlFor="desarrollo">Desenvolvimento</label>
                    <input id="desarrollo" type="checkbox" onChange={this.handleChange}></input>
                    <input id="detalles" type="text" onChange={this.handleChange}></input>{/*CONFIRMAR*/}
                    <h2>Caracteristicas do Equipamento:</h2>
                    <label htmlFor="utilizador">Utilizador:</label>
                    <input type="text" id="utilizador" onChange={this.handleChange}/>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" onChange={this.handleChange}/>
                    <label htmlFor="equipo">Equipo:</label>
                    <input type="text" id="equipo" onChange={this.handleChange}/>
                    <label htmlFor="modelo ">Marca/Modelo:</label>
                    <input type="text" id="modelo" onChange={this.handleChange}></input>
                    <label htmlFor="numeroSerie">Numero de Serie:</label>
                    <input type="text" id="numeroSerie" onChange={this.handleChange}></input>
                    <h2>ficha del tecnico! CAMBIAR</h2>
                    <label htmlFor="tecnico">Tecnico:</label>
                    <input type="text" id="tecnico" onChange={this.handleChange}/>
                    <label htmlFor="horaInicio">Inicio:</label>
                    <input type="time" id="horaInicio" onChange={this.handleChange}/>
                    <label htmlFor="horaFin">Fin:</label>
                    <input type="time" id="horaFin" onChange={this.handleChange}/>
                    <label htmlFor="deslocacion">Deslocação:</label>
                    <input type="time" id="deslocacion" onChange={this.handleChange}></input>
                    <label htmlFor="totalHoras"><strong>Total</strong> Horas:</label>
                    <input type="number" id="totalHoras" onChange={this.handleChange}></input>
                    <label htmlFor="totalKilometros"><strong>Total</strong> Kilometros:</label>
                    <input type="number" id="totalKilometros" onChange={this.handleChange}></input>
                    <label htmlFor="normal">Normal</label>
                    <input type="checkbox" id="normal" onChange={this.handleChange}></input>
                    <label htmlFor="especializada">Especializada</label>
                    <input type="checkbox" id="especializada" onChange={this.handleChange}></input>
                    <h2>Descrição:</h2>
                    <textarea id="descripcion" name="textarea" rows="10" cols="50">Write something here</textarea>
                    <h2>Material Utilizado</h2>
                    <label htmlFor="codigo">Codigo:</label>
                    <input type="text" id="codigo" onChange={this.handleChange}/>
                    <label htmlFor="descripcion">Descrição:</label>
                    <input type="text" id="descripcion" onChange={this.handleChange}/>
                    <label htmlFor="qtd">QTD:</label>
                    <input type="text" id="qtd" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Relatorio;