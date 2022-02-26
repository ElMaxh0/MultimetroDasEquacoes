import react from "react";
import { ProjectHost } from "../hostdetect/host";
import { FooterStyles } from "./styled";
function Footer(){
    return(
        <FooterStyles>
            <div id={'Copirights footer '} >
                <h4>© Copyright 2020 AleHot Projekts - All Rights Reserved</h4>
                <h4>{ProjectHost} is a AleHot Projekt </h4>
                <h4> Maded by 123alehot.net.br</h4>
                <h4> Developed in <a href={"/wellcome"}>Laravel</a></h4>
                <h4> Hosted by Hostinger  </h4>
            </div>
        </FooterStyles>
    )
}
export{
    Footer
}