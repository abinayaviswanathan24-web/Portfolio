import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subtractNumber, multipleNumber, divisionNumber, modulusNumber, powerNumber } from "./action";

function Practise(){
    const dispatch = useDispatch();
    const addResult = useSelector((state) => state.add.result);
    const subtractResult = useSelector((state) => state.subtract.result);
    const multipleResult = useSelector((state) => state.multiple.result);
    const divisionResult = useSelector((state) => state.division.result);
    const modulusResult = useSelector((state) => state.modulus.result);
    const powerResult = useSelector((state) => state.power.result);
    return(
        <div>

            <label>Redux Counter</label>

            <h3>Add Result: {addResult}</h3>
            <button onClick={() => dispatch(addNumber(5))}>Add 5</button>

            <h3>Subtract Result: {subtractResult}</h3>
            <button onClick={() => dispatch(subtractNumber(3))}>Subtract 3</button>

            <h3>Multiple Result: {multipleResult}</h3>
            <button onClick={() => dispatch(multipleNumber(3))}>Multiple 3</button>

            <h3>Division Result: {divisionResult}</h3>
            <button onClick={() => dispatch(divisionNumber(5))}>Division 5</button>

            <h3>Modulus Result: {modulusResult}</h3>
            <button onClick={() => dispatch(modulusNumber(2))}>Modulus 2</button>

            <h3>Power Result: {powerResult}</h3>
            <button onClick={() => dispatch(powerNumber(6))}>Power 6</button>
        </div>
    )
}
export default Practise