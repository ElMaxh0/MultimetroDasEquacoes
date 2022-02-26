import Multimetro from "../components/multimeter/multimetro";
import { useContent } from "../hooks/contentid"
import { useBackground } from "../hooks/background"
import Content from "../components/infoload/load";

function LoadScreen(){
    const {bgid, setbgid} =useBackground()
    const {content, setContent} =useContent()
    switch(content){
        case 1:
            setbgid(1)
            return <Multimetro />
            break
        case 2:
            setbgid(2)
            return <Content />
            break
        default:
            return "default"
    }
}
export{
    LoadScreen
}