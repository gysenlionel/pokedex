import axios from "axios";
import { Evolution_chain } from "../types/data.model";

export const getEvol = async(urlEvol:string,
    setEvol:React.Dispatch<React.SetStateAction<Evolution_chain | undefined>>,
    setFetchPoke:React.Dispatch<React.SetStateAction<boolean>>)=>{

    const res = await axios.get(urlEvol)
    setEvol(res.data.chain)
    setFetchPoke(true)
}