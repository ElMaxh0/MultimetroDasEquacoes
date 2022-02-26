import { useContent } from "../../hooks/contentid";
import { useInfoid } from "../../hooks/infoid";
import { MultimetroStyles } from "./styled";

function Multimetro(){
    const {Infoid, setInfoid} = useInfoid()
    const {content, setContent} =useContent()
    return(

        <div>
            <div><h1>Multimetro Das Formulas </h1></div>
            <MultimetroStyles>
                <div className={'multimetrocontainer'}>
                    <div class="basemultimetro">
                    <a ><div onClick={() => Dataload(2) } id="peca01" class="multimetro-multimetro-pecas pizza1"><center><div className="opcao opcaoicon1"><p>R * I</p></div></center></div></a>
                    <a ><div onClick={() => Dataload(2) } id="peca01" class="multimetro-multimetro-pecas pizza2"><center><div className="opcao opcaoicon2"><p>P / I </p></div></center></div></a>
                    <a ><div onClick={() => Dataload(2) } id="peca07" class="multimetro-multimetro-pecas pizza3"><center><div className="opcao opcaoicon3"><p>&radic; P * R </p></div></center></div></a>
                    <a ><div onClick={() => Dataload(1) } id="peca06" class="multimetro-multimetro-pecas pizza4"><center><div className="opcao opcaoicon4"><p>V / I</p></div></center></div></a>
                    <a ><div onClick={() => Dataload(1) } id="peca05" class="multimetro-multimetro-pecas pizza5"><center><div className="opcao opcaoicon5"><p>V<sup>2</sup>  / P</p></div></center></div></a>
                    <a ><div onClick={() => Dataload(4) } id="peca04" class="multimetro-multimetro-pecas pizza6"><center><div className="opcao opcaoicon6"><p>V  / R </p></div></center></div></a>
                    <a ><div onClick={() => Dataload(3) } id="peca03" class="multimetro-multimetro-pecas pizza7"><center><div className="opcao opcaoicon7"><p>&radic;  P / R</p></div></center></div></a>
                    <a ><div onClick={() => Dataload(4) } id="peca02" class="multimetro-multimetro-pecas pizza8"><center><div className="opcao opcaoicon8"><p>V * I</p></div></center></div></a>
                    <div id="userdialog" class="multimetro-multimetro-top-pecasrc">
                    <div>
                </div>
            </div>

                </div>
          </div>
        </MultimetroStyles>
        <p>Referencias de Formula :
            <ul>
                <li>
                    V=   Voltagem medida em Volts 
                </li>
                <li>
                    P=   Potencia medida em Whats
                </li>
                <li>
                    R= Resistencia medida em Ohms
                </li>
                <li>
                    I= Corrente Medida em Amperes 
                </li>
            </ul>
        </p>
        <br/>
        <p style={{"color":"rgba(250,0,0,1)"}}>Aviso este multimetro é meramente ilustrativo baseado em um que eu acabei encontrando aqui em casa e resolvi fazer um diagrama de formulas do mesmo</p>
        </div>
    )
    function Dataload(id){
        setContent(2);
        setInfoid(id);
        console.log (2)
    }
}

export default Multimetro