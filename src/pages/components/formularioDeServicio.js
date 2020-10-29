import React, { Component } from 'react' 
import {formulario} from './style.module.scss'
import {cliente} from './style.module.scss'
import {recuadro1} from './style.module.scss'
import {pedido} from './style.module.scss'
import {recuadro2} from './style.module.scss'
import {equipo} from './style.module.scss'
import {recuadro3} from './style.module.scss'
import {ficha} from './style.module.scss'
import {descript} from './style.module.scss'
import {material} from './style.module.scss'
import {horas} from './style.module.scss'


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
        instalacion: null,
        reparacion: null,
        presupuesto: null,
        desarrollo: null,
        detalles: null,
        utilizador: null,
        password: null,
        equipo: null,
        modelo: null,
        numeroSerie: null,
        tecnico: null,
        horaInicio: null,
        horaFin: null,
        deslocacion: null,
        totalHoras: null,
        totalKilometros: null,
        normal: null,
        especializada: null,
        diasUtiles: null,
        sabDomFer: null,
        nocturno: null,
        pendiente: null,
        concluido: null,
        campotexto: null,
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
                <form className={formulario} onSubmit={this.handleSubmit}>
                    <h2>Relatorio de Serviço</h2>
                    <div className={cliente}>
                        <h3>Requisitante:</h3>
                            <div className={recuadro1}>
                                <div>
                                    <label htmlFor="cliente"></label>
                                    <input type="text" id="cliente" placeholder="Cliente" onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="morada"></label>
                                    <input type="text" id="morada" placeholder="Morada" onChange={this.handleChange}/>
                                </div>  
                                <div>
                                    <label htmlFor="cp"></label>
                                    <input type="text" id="cp" placeholder="Cp" onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="localidade"></label>
                                    <input type="text" id="localidade" placeholder="Localidade" onChange={this.handleChange}></input>
                                </div>
                                <div>
                                    <label htmlFor="solicitante"></label>
                                    <input type="text" id="solicitante" placeholder="Solicitante" onChange={this.handleChange}></input>
                                </div>
                                <div>
                                    <label htmlFor="nipc"></label>
                                    <input type="text" id="nipc" placeholder="NIPC" onChange={this.handleChange}></input>
                                </div>
                                <div>
                                    <label htmlFor="telefone"></label>
                                    <input type="text" id="telefone" placeholder="Telefone" onChange={this.handleChange}></input>
                                </div>
                            </div>
                    </div>

                    <div className={pedido}>
                        <h3>Pedido:</h3>
                            <div className={recuadro2}>
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
                            </div>
                            <div>
                                <input id="detalles" type="text" onChange={this.handleChange}></input>{/*CONFIRMAR*/}
                            </div>
                    </div>

                    <div className={equipo}>
                        <h3>Caracteristicas do Equipamento:</h3>
                        <div className={recuadro3}>
                            <div>
                                <label htmlFor="utilizador"></label>
                                <input type="text" id="utilizador" placeholder="Utilizador" onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="password"></label>
                                <input type="text" id="password" placeholder="Password" onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="equipo"></label>
                                <input type="text" id="equipo" placeholder="Equipo" onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="modelo "></label>
                                <input type="text" id="modelo" placeholder="Marca/Modelo" onChange={this.handleChange}></input>
                            </div>
                            <div>
                                <label htmlFor="numeroSerie"></label>
                                <input type="text" id="numeroSerie" placeholder="Numero de Serie" onChange={this.handleChange}></input>
                            </div>
                        </div>
                    </div>

                    <div className={ficha}>
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
                    </div>

                    <div className={horas}>
                        <div>
                            <label htmlFor="diasUtiles">Dias Uteis 18/24</label>
                            <input id="diasUtiles" type="checkbox" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="sabDomFer">Sab./Dom./Fer.</label>
                            <input id="sabDomFer" type="checkbox" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="noctoruno">Nocturno</label>
                            <input id="nocturno" type="checkbox" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="pendiente">Pendiente</label>
                            <input id="pendiente" type="checkbox" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="concluido">Concluido</label>
                            <input id="concluido" type="checkbox" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div className={descript}>
                        <h3>Descrição:</h3>
                        <textarea onChange={this.handleChange} id="campotexto" rows="10" cols="50">PARA QUE COÑO EXISTE EL PLACEHOLDER PLASTA DE MIERDA!!!</textarea>
                    </div>

                    <div className={material}>
                        <h3>Material Utilizado</h3>
                        <label htmlFor="codigo">Codigo:</label>
                        <input type="text" id="codigo" onChange={this.handleChange}/>
                        <label htmlFor="descripcion">Descrição:</label>
                        <input type="text" id="descripcion" onChange={this.handleChange}/>
                        <label htmlFor="qtd">QTD:</label>
                        <input type="text" id="qtd" onChange={this.handleChange}/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Relatorio;