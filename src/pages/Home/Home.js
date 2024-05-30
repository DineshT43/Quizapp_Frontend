import { useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../component/index"

export const Home = () => {

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get("")
            } catch(err) {  
                console.log(err);
            }
        })()
    }, [])


    return (
        <Navbar />
    )
}