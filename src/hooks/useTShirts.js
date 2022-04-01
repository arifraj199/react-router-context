import { useEffect, useState } from "react"

const useTShirts = ()=> {
    const [tShirts,settShirts] = useState([]);
    useEffect( ()=>{
        fetch('tshirt.json')
        .then(res=>res.json())
        .then(data=>settShirts(data));
    },[]);
    return [tShirts,settShirts];
}

export default useTShirts;