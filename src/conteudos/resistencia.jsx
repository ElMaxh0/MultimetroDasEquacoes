import React from "react";
import styled from "styled-components";

export function Resistence_data (){
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
                <h1> Resistencia Eletrica </h1>
                <p> É a capacidade de qualquer material para se opor a passagem de corrente eletrica,
                    este valor normalmente é calculado pela escala Ômica tendo como simbologia o caracterie Omega .
                    Uma formula simples para calcular este valor se da atravez da Primeira lei de Ohm 
                    (Nome dado em homenagem ao seu criador ) </p>
                <CalcBox>
                    <h1>R = U / I </h1><br/>
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
                    <h1>R = V<sup>2</sup> / P</h1><br/>
                    <p>
                        <ul>
                            <li>
                                V= Tensao do potencial eletrico normalmente expressa em Volts (V)
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
                    <h1>R = P / I<sup>2</sup></h1><br/>
                    <p>
                        <ul>
                            <li>
                                P= Potencia de trabalho do circuito eletrico (W)
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