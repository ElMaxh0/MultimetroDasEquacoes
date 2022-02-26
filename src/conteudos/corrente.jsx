import React from "react";
import styled from "styled-components";

export function Corrente_data (){
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
                <h1> Corrente Eletrica  </h1>
                <p> A corrente eletrica é o fluxo ordenado de eletrons sobre um determinado material , sua unidade de controle normalmente é definida como Amperes , medida esta que equive a aproximadamente 1 Columb por Segundo ,

                </p>
                <CalcBox>
                    <h1>I= U / R </h1><br/>
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
                </CalcBox>
                <CalcBox>
                    <h1>I = P/U </h1><br/>
                    <p>
                        <ul>
                            <li>
                                U= Tensao do potencial eletrico normalmente expressa em Volts (V)
                            </li>
                            <li>
                                P= Potencia de trabalho do Circuito (W)
                            </li>
                            <li>
                                I= Corente eletrica fluindo sobre o condutor , normalmente expressa em Amperes (A)
                            </li>
                        </ul>
                    </p>
                </CalcBox>
                <CalcBox>
                    <h1>I= &radic; (P/R)</h1><br/>
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
                </CalcBox>
                
                <br/>
                <InfoBox>
                    <div>
                        <p>Normalmente quando os atomos do material se opoe a passagem de corrente eletrica acaba criando um senario de maior agitação das moleculas internas causando o efeito joule (Aquecimento do condutor )</p>
                    </div>
                </InfoBox>
            </div>
        </div>
    )
}