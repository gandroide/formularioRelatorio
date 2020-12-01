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
import Swal from 'sweetalert2'

let initialState = {
    cliente: "",
    morada: "",
    cp: "",
    localidade: "",
    solicitante: "",
    nipc: "",
    telefone: "",
    numeroObra: "",
    asistencia: "",
    instalacion: "",
    reparacion: "",
    presupuesto: "",
    desarrollo: "",
    detalles: "",
    utilizador: "",
    password: "",
    equipo: "",
    modelo: "",
    numeroSerie: "",
    tecnico: "",
    horaInicio: "",
    horaFin: "",
    deslocacion: "",
    totalHoras: "",
    totalKilometros: "",
    tecnico2: "",
    horaInicio2: "",
    horaFin2: "",
    deslocacion2: "",
    totalHoras2: "",
    totalKilometros2: "",
    diasUtiles: "",
    sabDomFer: "",
    nocturno: "",
    pendiente: "",
    concluido: "",
    campotexto: "",
    codigo: "",
    descripcion: "",
    qtd: "",
    carro: "",
    fecha: ""
}

class Relatorio extends Component { 
    constructor(props){super(props)
        this.state = initialState
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
        
    }
    handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let resultado = await fetch('https://relatorio.netlify.app/.netlify/functions/send-email',{
                method: 'POST',
                body: JSON.stringify(this.state)
            })
            let respuesta = await resultado.json()

            this.setState(initialState)

            Swal.fire({
                icon: 'success',
                title: 'Obrigado!',
                text: respuesta.mensaje
              })
            
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Não foi possível enviar!'
              })
        }
    }
    render(){
        return (
            <div>
                <form className={formulario} onSubmit={this.handleSubmit}  name="relatorio" method="POST">
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
                                    <input type="text" id="cliente" placeholder="Cliente" onChange={this.handleChange} name="cliente" value={this.state.cliente}/>
                                </div>
                                <div>
                                    <label htmlFor="morada"></label>
                                    <input type="text" id="morada" placeholder="Morada" onChange={this.handleChange} name="morada" value={this.state.morada}/>
                                </div>  
                                <div>
                                    <label htmlFor="cp"></label>
                                    <input type="text" id="cp" placeholder="Cp" onChange={this.handleChange} name="cp" value={this.state.cp}/>
                                </div>
                                <div>
                                    <label htmlFor="localidade"></label>
                                    <input type="text" id="localidade" placeholder="Localidade" onChange={this.handleChange} name="localidade" value={this.state.localidade}></input>
                                </div>
                                <div>
                                    <label htmlFor="solicitante"></label>
                                    <input type="text" id="solicitante" placeholder="Solicitante" onChange={this.handleChange} name="solicitante" value={this.state.solicitante}></input>
                                </div>
                                <div>
                                    <label htmlFor="nipc"></label>
                                    <input type="text" id="nipc" placeholder="NIPC" onChange={this.handleChange} name="nipc" value={this.state.nipc}></input>
                                </div>
                                <div>
                                    <label htmlFor="telefone"></label>
                                    <input type="text" id="telefone" placeholder="Telefone" onChange={this.handleChange} name="telefone" value={this.state.telefone}></input>
                                </div>
                                <div>
                                    <label htmlFor="numeroObra"></label>
                                    <input type="text" id="numeroObra" placeholder="Num.Obra" onChange={this.handleChange} name="numeroObra" value={this.state.numeroObra}></input>
                                </div>
                            </div>
                    </div>

                    <div className={pedido}>
                        <h3>Pedido:</h3>
                            <div className={recuadro2}>
                                <label htmlFor="asistencia">Assistência</label>
                                <input id="asistencia" type="checkbox" onChange={this.handleChange} name="asistencia" value={this.state.asistencia}></input>
                                <label htmlFor="instalacion">Instalação</label>
                                <input id="instalacion" type="checkbox" onChange={this.handleChange} name="instalacion" value={this.state.instalacion}></input>
                                <label htmlFor="reparacion">Reparação</label>
                                <input id="reparacion" type="checkbox" onChange={this.handleChange} name="reparacion" value={this.state.reparacion}></input>
                                <label htmlFor="presupuesto">Orçamento</label>
                                <input id="presupuesto" type="checkbox" onChange={this.handleChange} name="presupuesto" value={this.state.presupuesto}></input>
                                <label htmlFor="desarrollo">Desenvolvimento</label>
                                <input id="desarrollo" type="checkbox" onChange={this.handleChange} name="desarrollo" value={this.state.desarrollo}></input>
                            </div>
                            <div>
                                <input id="detalles" type="text" onChange={this.handleChange} name="detalles" value={this.state.detalles}></input>
                            </div>
                    </div>

                    <div className={equipo}>
                        <h3>Caracteristicas do Equipamento:</h3>
                        <div className={recuadro3}>
                            <div>
                                <label htmlFor="utilizador"></label>
                                <input type="text" id="utilizador" placeholder="Utilizador" onChange={this.handleChange} name="utilizador" value={this.state.utilizador}/>
                            </div>
                            <div>
                                <label htmlFor="password"></label>
                                <input type="text" id="password" placeholder="Password" onChange={this.handleChange} name="password" value={this.state.utilizador}/>
                            </div>
                            <div>
                                <label htmlFor="equipo"></label>
                                <input type="text" id="equipo" placeholder="Equipo" onChange={this.handleChange} name="equipo" value={this.state.equipo}/>
                            </div>
                            <div>
                                <label htmlFor="modelo"></label>
                                <input type="text" id="modelo" placeholder="Marca/Modelo" onChange={this.handleChange} name="modelo" value={this.state.modelo}></input>
                            </div>
                            <div>
                                <label htmlFor="numeroSerie"></label>
                                <input type="text" id="numeroSerie" placeholder="Numero de Serie" onChange={this.handleChange} name="numeroSerie" value={this.state.numeroSerie}></input>
                            </div>
                        </div>
                    </div>

                    <div className={ficha}>
                        <label htmlFor="tecnico">Tecnico:</label>
                        <select name="tecnico" onChange={this.handleChange} value={this.state.tecnico}>
                            <option value=" "> </option>
                            <option value="Alejandro Pacheco">Alejandro Pacheco</option>
                            <option value="Bruno Antonio Freitas">Bruno Antonio Freitas</option>
                            <option value="Bruno Miguel Freitas">Bruno Miguel Freitas</option>
                            <option value="Decio Rodrigues">Decio Rodrigues</option>
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
                        <input type="time" id="horaInicio" onChange={this.handleChange} name="horaInicio" value={this.state.horaInicio}/>
                        <label htmlFor="horaFin">Fim:</label>
                        <input type="time" id="horaFin" onChange={this.handleChange} name="horaFin" value={this.state.horaFin}/>
                        <label htmlFor="deslocacion">Deslocação:</label>
                        <input type="time" id="deslocacion" onChange={this.handleChange} name="deslocacion" value={this.state.deslocacion}></input>
                        <label htmlFor="totalHoras"><strong>Total</strong> Horas:</label>
                        <input type="time" id="totalHoras" onChange={this.handleChange} name="totalHoras" value={this.state.totalHoras}></input>
                        <label htmlFor="totalKilometros"><strong>Total</strong> Kilometros:</label>
                        <input type="number" id="totalKilometros" onChange={this.handleChange} name="totalKilometros" value={this.state.totalKilometros}></input>
                    </div>

                    <div className={ficha2}>
                        <label htmlFor="tecnico2">Tecnico:</label>
                        <input type="text" id="tecnico2" onChange={this.handleChange} name="tecnico2" value={this.state.tecnico2}/>
                        <label htmlFor="horaInicio2">Inicio:</label>
                        <input type="time" id="horaInicio2" onChange={this.handleChange} name="horaInicio2" value={this.state.horaInicio2}/>
                        <label htmlFor="horaFin2">Fim:</label>
                        <input type="time" id="horaFin2" onChange={this.handleChange} name="horaFin2" value={this.state.horaFin2}/>
                        <label htmlFor="deslocacion2">Deslocação:</label>
                        <input type="time" id="deslocacion2" onChange={this.handleChange} name="deslocacion2" value={this.state.deslocacion2}></input>
                        <label htmlFor="totalHoras2"><strong>Total</strong> Horas:</label>
                        <input type="time" id="totalHoras2" onChange={this.handleChange} name="totalHoras2" value={this.state.totalHoras2}></input>
                        <label htmlFor="totalKilometros2"><strong>Total</strong> Kilometros:</label>
                        <input type="number" id="totalKilometros2" onChange={this.handleChange} name="totalKilometros2" value={this.state.totalKilometros2}></input>
                    </div>


                    <div className={horas}>
                        <div>
                            <label htmlFor="diasUtiles">Dias Uteis 18/24</label>
                            <input id="diasUtiles" type="checkbox" onChange={this.handleChange} name="diasUtiles" value={this.state.diasUtiles}></input>
                        </div>
                        <div>
                            <label htmlFor="sabDomFer">Sab./Dom./Fer.</label>
                            <input id="sabDomFer" type="checkbox" onChange={this.handleChange} name="sabDomFer" value={this.state.sabDomFer}></input>
                        </div>
                        <div>
                            <label htmlFor="nocturno">Nocturno</label>
                            <input id="nocturno" type="checkbox" onChange={this.handleChange} name="nocturno" value={this.state.nocturno}></input>
                        </div>
                        <div>
                            <label htmlFor="pendiente">Pendente</label>
                            <input id="pendiente" type="checkbox" onChange={this.handleChange} name="pendiente" value={this.state.pendiente}></input>
                        </div>
                        <div>
                            <label htmlFor="concluido">Concluido</label>
                            <input id="concluido" type="checkbox" onChange={this.handleChange} name="concluido" value={this.state.concluido}></input>
                        </div>
                    </div>

                    <div className={descript}>
                        <h3>Descrição:</h3>
                        <textarea onChange={this.handleChange} id="campotexto" rows="10" cols="50" placeholder="Detalhes" name="campotexto" value={this.state.campotexto}></textarea>
                    </div>

                    <div className={material}>
                        <h3>Material Utilizado</h3>
                        <label htmlFor="codigo">Codigo:</label>
                        <input type="text" id="codigo" onChange={this.handleChange} name="codigo" value={this.state.codigo}/>
                        <label htmlFor="descripcion">Descrição:</label>
                        <input type="text" id="descripcion" onChange={this.handleChange} name="descripcion" value={this.state.descripcion}/>
                        <label htmlFor="qtd">QTD:</label>
                        <input type="text" id="qtd" onChange={this.handleChange} name="qtd" value={this.state.qtd}/>
                    </div>

                    <div className={carro}>
                        <h3>Matricula do Carro</h3>
                        <select name="carro" onChange={this.handleChange} value={this.state.carro}>
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