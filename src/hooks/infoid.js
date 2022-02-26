import React, { createContext, useContext, useState } from "react";
export const InfoidContext = createContext();
export default function InfoidProvider({children}){
    const[Infoid, setInfoid]= useState(1);
    return <InfoidContext.Provider value={{Infoid,setInfoid}}>{children}</InfoidContext.Provider>
}
export function useInfoid(){
    const context= useContext(InfoidContext)
    const {Infoid, setInfoid} = context;
    return {Infoid, setInfoid}

}