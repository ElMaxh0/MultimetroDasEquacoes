import React from "react";
import styled from "styled-components";

export function Tensao_data (){
    const CalcBox = styled.div`
    border-width: medium;
    border-style: solid;
    border-color: #00f;
    color:#000;
    `
    const InfoBox = styled.div`
    border-width: medium;
    border-style: solid;
    border-color: #000;
    color:#000;
    `
    return(
        <div>
            <div>
                <h1> Tensão  </h1>
                <p> A tensão refere-se a diferença de potencial entre dois condutores , permitindo assim que haja a passagem de corrente entrica ,
                    A diferença de potencial é um dos componentes fundamentais para a circulação de cargas eletricas e eletromagneticas , se não há um desiquilibrio que possibilite os eletrons fluirem ordenadamente , não possuimos carga eletrica.
                    Esta diferença de potencial na maioria dos cenarios atuais são medidas em volts , podendo ser calculado pela formula  </p>
                <h4>
                    Formas de Calcular a tensao :
                </h4>
                <CalcBox>
                    <h4>Atravez da Potencia e Corrente sobre o condutor </h4>
                    <h1>DDP = P / I </h1><br/>
                    <p>
                        <ul>
                            <li>
                                DDP= Diferença de Potencial (Volts)
                            </li>
                            <li>
                                P= Potencia de trabalho dos dispositivos conectados ao condutor( Whats)
                            </li>
                            <li>
                                I= Corente eletrica fluindo sobre o condutor , normalmente expressa em Amperes (A)
                            </li>
                        </ul>
                    </p>
                </CalcBox><br/>
                <InfoBox>
                    <div>
                        <h3>Utilizando a lei de Ohm </h3>
                        <div>
                            <div>
                                <h1>U = R * I </h1><br/>
                                <p>
                                    <ul>
                                        <li>
                                            U= Tensao do potencial eletrico normalmente expressa em Volts (V)
                                        </li>
                                        <li>
                                            R= Resistencia do material 
                                        </li>
                                        <li>
                                            I= Corente eletrica fluindo sobre o condutor , normalmente expressa em Amperes (A)
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </InfoBox>
                <InfoBox>
                    <div>
                        <h3>Atravez da lei de Ohm  </h3>
                        <div>
                        <h1> DDP = &radic; (P * R) </h1><br/>
                            <p>
                                <ul>
                                    <li>
                                        DDP= Diferença de Potencial (Volts)
                                    </li>
                                    <li>
                                        P= Potencia de trabalho dos dispositivos conectados ao condutor( Whats)
                                    </li>
                                    <li>
                                        R= Resistencia do circuito Eletrico 
                                    </li>
                                </ul></p>
                        </div>
                    </div>
                </InfoBox>
            </div>
        </div>
    )
}