import react from "react";
import { Corrente_data } from "../../conteudos/corrente";
import { Potencia_data } from "../../conteudos/potencia";
import { Resistence_data } from "../../conteudos/resistencia";
import { Tensao_data } from "../../conteudos/tensao";
import { useContent } from "../../hooks/contentid";
import { useInfoid } from "../../hooks/infoid";

function Content (){
    const {content, setContent} =useContent()
    const {Infoid, setInfoid} = useInfoid();
    function Data(){
        console.log(Infoid)
        if (Infoid == 1){
            return(<div>
                <Resistence_data />
            </div>)
        }
        else if (Infoid == 2){
            return(<div>
                <Tensao_data />
            </div>)
        }
        else if (Infoid == 3){
            return(<div>
                <Corrente_data />
            </div>)
        }
        else if (Infoid == 4){
            return(<div>
                <Potencia_data />
            </div>)
        }
        else{
            return(
                <div>
                    <h1>Error </h1>
                    <p>Ocorreu Algo de errado com sua comunicação com os Servidores da AleHot Projekts </p>
                </div>
            )
        }
    }
    return(
        <div>
            <div className="scrolling">
                <Data />
            </div>
            <div>
            <button align="center" onClick={()=> setContent(1)} className={"bt btred"}> Voltar ao Inicio  </button><br /><br />
            </div>
        </div>
    )
}
export default Content