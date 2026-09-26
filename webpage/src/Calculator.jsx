import React,{useEffect, useState} from "react";
import { ToastContainer } from "react-toastify";

function Calculator(){
    const [data , setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/hacktivist123')
        .then(response =>{
            if(!response.ok){
                throw new Error('Network reswponse was not ok')
            }
            return response.json();

        })
        .then(answer =>{
            console.log(answer , "datasssssss");
            setData(answer)
        
        })
        .catch(error =>{
            console.error('There has been a problem with your fetch operation:', error);
        });
    },[]
);

return(
    <div>
        <ToastContainer/>
        <h1>{data.bio}</h1>
        <h1>{data.location}</h1>
    </div>
);
}
export default Calculator;