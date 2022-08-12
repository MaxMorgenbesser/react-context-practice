import { createContext,useState } from 'react';
import './App.css';

import GetNum from './GetNum';
import ShowNum from './ShowNum'
export const userInfoContext = createContext(null)

function App() {
  const [number,setNumber]=useState(0)
  return (
    <userInfoContext.Provider value={{setNumber,number}}>
      <GetNum/>
      <ShowNum/>
    </userInfoContext.Provider>
  );
}

export default App;
