
import { useContext,useState } from 'react';
import { userInfoContext } from './App';
const ShowNum = ()=>{
    const {number} = useContext(userInfoContext)
    return<h1>This is the Number {number}</h1>

}

export default ShowNum