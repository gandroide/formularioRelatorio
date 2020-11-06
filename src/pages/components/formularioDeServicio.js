import React, { Component } from 'react' 
import {formulario} from './style.module.scss'
import {cliente} from './style.module.scss'
import {recuadro1} from './style.module.scss'
import {pedido} from './style.module.scss'
import {recuadro2} from './style.module.scss'
import {equipo} from './style.module.scss'
import {recuadro3} from './style.module.scss'
import {ficha} from './style.module.scss'
import {ficha2} from './style.module.scss'
import {descript} from './style.module.scss'
import {material} from './style.module.scss'
import {carro} from './style.module.scss'
import {horas} from './style.module.scss'
import {fecha} from './style.module.scss'


class Relatorio extends Component { 
    state = {
        cliente: null,
        morada: null,
        cp: null,
        localidade: null,
        solicitante: null,
        nipc: null,
        telefone: null,
        numeroObra: null,
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
        tecnico2: null,
        horaInicio2: null,
        horaFin2: null,
        deslocacion2: null,
        totalHoras2: null,
        totalKilometros2: null,
        diasUtiles: null,
        sabDomFer: null,
        nocturno: null,
        pendiente: null,
        concluido: null,
        campotexto: null,
        codigo: null,
        descripcion: null,
        qtd: null,
        carro: null,
        fecha: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <form className={formulario} onSubmit={this.handleSubmit}  name="relatorio" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="relatorio"></input>
                    <h2>Relatorio de Serviço</h2>

                    <div className={fecha}>
                        <h3>Data</h3>
                        <label htmlFor="fecha">Dia de Serviço:</label>
                        <input type="date" id="fecha" onChange={this.handleChange} name="fecha"/>
                    </div>

                    <div className={cliente}>
                        <h3>Requisitante:</h3>
                            <div className={recuadro1}>
                                <div>
                                    <label htmlFor="cliente"></label>
                                    <input type="text" id="cliente" placeholder="Cliente" onChange={this.handleChange} name="cliente"/>
                                </div>
                                <div>
                                    <label htmlFor="morada"></label>
                                    <input type="text" id="morada" placeholder="Morada" onChange={this.handleChange} name="morada"/>
                                </div>  
                                <div>
                                    <label htmlFor="cp"></label>
                                    <input type="text" id="cp" placeholder="Cp" onChange={this.handleChange} name="cp"/>
                                </div>
                                <div>
                                    <label htmlFor="localidade"></label>
                                    <input type="text" id="localidade" placeholder="Localidade" onChange={this.handleChange} name="localidade"></input>
                                </div>
                                <div>
                                    <label htmlFor="solicitante"></label>
                                    <input type="text" id="solicitante" placeholder="Solicitante" onChange={this.handleChange} name="solicitante"></input>
                                </div>
                                <div>
                                    <label htmlFor="nipc"></label>
                                    <input type="text" id="nipc" placeholder="NIPC" onChange={this.handleChange} name="nipc"></input>
                                </div>
                                <div>
                                    <label htmlFor="telefone"></label>
                                    <input type="text" id="telefone" placeholder="Telefone" onChange={this.handleChange} name="telefone"></input>
                                </div>
                                <div>
                                    <label htmlFor="numeroObra"></label>
                                    <input type="text" id="numeroObra" placeholder="Num.Obra" onChange={this.handleChange} name="numeroObra"></input>
                                </div>
                            </div>
                    </div>

                    <div className={pedido}>
                        <h3>Pedido:</h3>
                            <div className={recuadro2}>
                                <label htmlFor="asistencia">Assistência</label>
                                <input id="asistencia" type="checkbox" onChange={this.handleChange} name="asistencia"></input>
                                <label htmlFor="instalacion">Instalação</label>
                                <input id="instalacion" type="checkbox" onChange={this.handleChange} name="instalacion"></input>
                                <label htmlFor="reparacion">Reparação</label>
                                <input id="reparacion" type="checkbox" onChange={this.handleChange} name="reparacion"></input>
                                <label htmlFor="presupuesto">Orçamento</label>
                                <input id="presupuesto" type="checkbox" onChange={this.handleChange} name="presupuesto"></input>
                                <label htmlFor="desarrollo">Desenvolvimento</label>
                                <input id="desarrollo" type="checkbox" onChange={this.handleChange} name="desarrollo"></input>
                            </div>
                            <div>
                                <input id="detalles" type="text" onChange={this.handleChange} name="detalles"></input>
                            </div>
                    </div>

                    <div className={equipo}>
                        <h3>Caracteristicas do Equipamento:</h3>
                        <div className={recuadro3}>
                            <div>
                                <label htmlFor="utilizador"></label>
                                <input type="text" id="utilizador" placeholder="Utilizador" onChange={this.handleChange} name="utilizador"/>
                            </div>
                            <div>
                                <label htmlFor="password"></label>
                                <input type="text" id="password" placeholder="Password" onChange={this.handleChange} name="password"/>
                            </div>
                            <div>
                                <label htmlFor="equipo"></label>
                                <input type="text" id="equipo" placeholder="Equipo" onChange={this.handleChange} name="equipo"/>
                            </div>
                            <div>
                                <label htmlFor="modelo"></label>
                                <input type="text" id="modelo" placeholder="Marca/Modelo" onChange={this.handleChange} name="modelo"></input>
                            </div>
                            <div>
                                <label htmlFor="numeroSerie"></label>
                                <input type="text" id="numeroSerie" placeholder="Numero de Serie" onChange={this.handleChange} name="numeroSerie"></input>
                            </div>
                        </div>
                    </div>

                    <div className={ficha}>
                        <label htmlFor="tecnico">Tecnico:</label>
                        <select name="tecnico">
                            <option value=" "> </option>
                            <option value="Alejandro Pacheco">Alejandro Pacheco</option>
                            <option value="Bruno Antonio Freitas">Bruno Antonio Freitas</option>
                            <option value="Bruno Miguel Freitas">Bruno Miguel Freitas</option>
                            <option value="Decio Rodrigo">Decio Rodrigo</option>
                            <option value="Gervasio Fernandes">Gervasio Fernandes</option>
                            <option value="João Carlos Santos">João Carlos Santos</option>
                            <option value="João Vitor Freitas">João Vitor Freitas</option>
                            <option value="João Diogo Silva">João Diogo Silva</option>
                            <option value="Jose Eusebio Sousa">Jose Eusebio Sousa</option>
                            <option value="Jose Manuel Marques">Jose Manuel Marques</option>
                            <option value="Jose Enrique Sirit">Jose Enrique Sirit</option>
                            <option value="Luis Gonçalves">Luis Gonçalves</option>
                            <option value="Marcio Basilio">Marcio Basilio</option>
                            <option value="Marco Vieira">Marco Vieira</option>
                            <option value="Rafael Camacho">Rafael Camacho</option>
                            <option value="Roman Krivushin">Roman Krivushin</option>
                            <option value="Toni Caetano">Toni Caetano</option>
                        </select>

                      
                        <label htmlFor="horaInicio">Inicio:</label>
                        <input type="time" id="horaInicio" onChange={this.handleChange} name="horaInicio"/>
                        <label htmlFor="horaFin">Fim:</label>
                        <input type="time" id="horaFin" onChange={this.handleChange} name="horaFin"/>
                        <label htmlFor="deslocacion">Deslocação:</label>
                        <input type="time" id="deslocacion" onChange={this.handleChange} name="deslocacion"></input>
                        <label htmlFor="totalHoras"><strong>Total</strong> Horas:</label>
                        <input type="time" id="totalHoras" onChange={this.handleChange} name="totalHoras"></input>
                        <label htmlFor="totalKilometros"><strong>Total</strong> Kilometros:</label>
                        <input type="number" id="totalKilometros" onChange={this.handleChange} name="totalKilometros"></input>
                    </div>

                    <div className={ficha2}>
                        <label htmlFor="tecnico2">Tecnico:</label>
                        <input type="text" id="tecnico2" onChange={this.handleChange} name="tecnico2"/>
                        <label htmlFor="horaInicio2">Inicio:</label>
                        <input type="time" id="horaInicio2" onChange={this.handleChange} name="horaInicio2"/>
                        <label htmlFor="horaFin2">Fim:</label>
                        <input type="time" id="horaFin2" onChange={this.handleChange} name="horaFin2"/>
                        <label htmlFor="deslocacion2">Deslocação:</label>
                        <input type="time" id="deslocacion2" onChange={this.handleChange} name="deslocacion2"></input>
                        <label htmlFor="totalHoras2"><strong>Total</strong> Horas:</label>
                        <input type="time" id="totalHoras2" onChange={this.handleChange} name="totalHoras2"></input>
                        <label htmlFor="totalKilometros2"><strong>Total</strong> Kilometros:</label>
                        <input type="number" id="totalKilometros2" onChange={this.handleChange} name="totalKilometros2"></input>
                    </div>


                    <div className={horas}>
                        <div>
                            <label htmlFor="diasUtiles">Dias Uteis 18/24</label>
                            <input id="diasUtiles" type="checkbox" onChange={this.handleChange} name="diasUtiles"></input>
                        </div>
                        <div>
                            <label htmlFor="sabDomFer">Sab./Dom./Fer.</label>
                            <input id="sabDomFer" type="checkbox" onChange={this.handleChange} name="sabDomFer"></input>
                        </div>
                        <div>
                            <label htmlFor="nocturno">Nocturno</label>
                            <input id="nocturno" type="checkbox" onChange={this.handleChange} name="nocturno"></input>
                        </div>
                        <div>
                            <label htmlFor="pendiente">Pendente</label>
                            <input id="pendiente" type="checkbox" onChange={this.handleChange} name="pendiente"></input>
                        </div>
                        <div>
                            <label htmlFor="concluido">Concluido</label>
                            <input id="concluido" type="checkbox" onChange={this.handleChange} name="concluido"></input>
                        </div>
                    </div>

                    <div className={descript}>
                        <h3>Descrição:</h3>
                        <textarea onChange={this.handleChange} id="campotexto" rows="10" cols="50" placeholder="Detalhes" name="campotexto"></textarea>
                    </div>

                    <div className={material}>
                        <h3>Material Utilizado</h3>
                        <label htmlFor="codigo">Codigo:</label>
                        <input type="text" id="codigo" onChange={this.handleChange} name="codigo"/>
                        <label htmlFor="descripcion">Descrição:</label>
                        <input type="text" id="descripcion" onChange={this.handleChange} name="descripcion"/>
                        <label htmlFor="qtd">QTD:</label>
                        <input type="text" id="qtd" onChange={this.handleChange} name="qtd"/>
                    </div>

                    <div className={carro}>
                        <h3>Matricula do Carro</h3>
                        <select name="carro">
                            <option value="nenhum carro foi usado"> </option> 
                            <option value="98-QM-75 CITROEN">98-QM-75 CITROEN</option> 
                            <option value="68-QC-66 PEUGEOT">68-QC-66 PEUGEOT</option>
                            <option value="31-PP-93 VOLKSWAGEM">31-PP-93 VOLKSWAGEM</option>
                            <option value="11-AF-25 CLIO">11-AF-25 CLIO</option>
                            <option value="31-58-XR CLIO">31-58-XR CLIO</option>
                            <option value="24-VU-41 NISSAN">24-VU-41 NISSAN</option>
                            <option value="25-VU-74 NISSAN">25-VU-74 NISSAN</option>
                            <option value="Viatura Particular">Viatura Particular</option>
                        </select>

                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Relatorio;