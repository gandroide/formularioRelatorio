import React, { Component } from 'react';

class Horario extends Component {
    state = {
        diasUtiles: null,
        sabDomFer: null,
        nocturno: null,
        pendiente: null,
        concluido: null
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
                <form onSubmit={this.handleSubmit}>
                <label for="diasUtiles">Dias Uteis 18/24</label>
                <input id="diasUtiles" type="checkbox" onChange={this.handleChange}></input>
                <label for="sabDomFer">Sab./Dom./Fer.</label>
                <input id="sabDomFer" type="checkbox" onChange={this.handleChange}></input>
                <label for="noctoruno">Nocturno</label>
                <input id="nocturno" type="checkbox" onChange={this.handleChange}></input>
                <label for="pendiente">Pendiente</label>
                <input id="pendiente" type="checkbox"></input>
                <label for="concluido">Concluido</label>
                <input id="concluido" type="checkbox"></input>
                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Horario;