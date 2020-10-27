import React, { Component } from 'react' 

class Materiales extends Component { 
    state = {
        codigo: null,
        descripcion: null,
        qtd: null
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
                <h2>Material Utilizado</h2>
                <form onSubmit={this.handleSubmit}>
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

export default Materiales;