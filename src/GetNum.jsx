import { useState,useContext } from "react"
import { userInfoContext } from "./App"

const GetNum=()=>{
const {setNumber,number} = useContext(userInfoContext)

return(
    <>
    <input type="number" onChange={(e)=>{setNumber(e.target.value)
    console.log(number)}}/></>
)

}

export default GetNum