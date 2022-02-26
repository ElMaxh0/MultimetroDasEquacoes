import React from "react";
import styled from "styled-components";

export function Potencia_data (){
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
                <h1> Potencia Eletrica </h1>
                <p> A potencia eletrica é a carga de trabalho do circuito eletrico , rusumindo o fluxo de eletrons gastos para fazer determinado trabalho 

                </p>
                <CalcBox>
                    <h1>P = U<sup>2</sup> / R </h1><br/>
                    <p>
                        <ul>
                            <li>
                                U= Tensao do potencial eletrico normalmente expressa em Volts (V)
                            </li>
                            <li>
                                R= Resistencia do material 
                            </li>
                            <li>
                                P= Potencia de trabalho do circuito eletrico (W)
                            </li>
                        </ul>
                    </p>
                </CalcBox>
                <CalcBox>
                    <h1>P = I<sup>2</sup> * R </h1><br/>
                    <p>
                        <ul>
                            <li>
                                R= Resistencia do material 
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
                    <h1>P = U * I</h1><br/>
                    <p>
                        <ul>
                            <li>
                                U= Tensao do potencial eletrico normalmente expressa em Volts (V)
                            </li>
                            <li>
                                P= Potencia de trabalho do circuito eletrico (W)
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