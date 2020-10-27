import React, { Component } from 'react'

class Descripcion extends Component {
    state = {
        descripcion: null
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
            <h2>Descrição:</h2>
                <form onSubmit={this.handleSubmit}>
                    <textarea id="descripcion" name="textarea" rows="10" cols="50">Write something here</textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Descripcion;