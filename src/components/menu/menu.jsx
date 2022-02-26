import React from "react"
import { useContent } from "../../hooks/contentid"
import { ProjectHost } from "../hostdetect/host"
import { MenuTopoStyles } from "./styles"

export function Menu (){
    const {content, setContent} =useContent()
    return (
        <MenuTopoStyles >
            <div id="imagem" className={"title"}>
                <h1>{ProjectHost}  &copy;</h1>
                </div>
            <ul>
                <li>
                </li>
                <li><a onClick={() => setContent(1)}>Inicio</a></li>

                <li><a onClick={() => setContent(87)}>Opcao1</a></li>
                
                <li><a onClick={() => setContent(98)}>Opcao2</a></li>

                <li><a onClick={() => setContent(88)}>Opcao3</a></li>
                
                <li><a onClick={() => setContent(3)}>Opcao4</a></li>
                
                <li><a onClick={() => setContent(99)}>Opcao5</a></li>
            </ul>
    </MenuTopoStyles>
    )
}