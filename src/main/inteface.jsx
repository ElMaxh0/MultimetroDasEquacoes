import react from "react";
import { ContentBoxStyle } from "../layout-GeneralStyles/contentbox";
import { Menu } from "../components/menu/menu";
import { Footer } from "../components/Footer/footer";
import { useBackground } from "../hooks/background";
import { useContent } from "../hooks/contentid";
import { LoadScreen } from "./load";
export default function Main(){
    const {bgid, setbgid} =useBackground()
    const {content, setContent} =useContent()
    return(
    <>
        <div>
            <Menu />
            <ContentBoxStyle className={'bgimage bg'+bgid}>
                <div className='container pensamento'>
                    <div id='Container'>
                        <LoadScreen />
                    </div>
                </div>
            </ContentBoxStyle>
            <Footer/>
        </div>
    </>
    )
}
