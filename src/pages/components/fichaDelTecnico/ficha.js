import React, { Component } from 'react' 

class Ficha extends Component { 
    state = {
        tecnico: null,
        horaInicio: null,
        horaFin: null,
        deslocacion: null,
        totalHoras: null,
        totalKilometros: null,
        normal: null,
        especializada: null
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
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Ficha;