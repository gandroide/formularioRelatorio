import React, { Component } from 'react' 

class Equipamento extends Component { 
    state = {
        utilizador: null,
        password: null,
        equipo: null,
        moddelo: null,
        numeroSerie: null,
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
            <h2>Caracteristicas do Equipamento:</h2>
                <form onSubmit={this.handleSubmit}>
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
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Equipamento;