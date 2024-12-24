"use client"
import React, { createContext,  useEffect,  useState } from 'react';
 const ContextPage = createContext();
export const ContextProvider = ({children}) => {
const [mixdata,setMixdata] = useState('')
const [trueheart,setTrueheart] = useState(false);
const [runuse,setRunuse] = useState(false);
const [truebutton,setTruebutton] = useState(false);
const [buttonuse,setButtonuse] = useState(false);
const [cartnum,setCartnum] = useState(0)
const [subpriceof,setSubpriceof] = useState('')
const [ totalof,setTotalof] = useState('')
const [itemcount01,setItemcount01] = useState(1)
const [subprice,setSubprice] = useState({})

const [array, setArray] = useState(() => {
  // Load initial state from localStorage
  const savedArray = localStorage.getItem("wishlistArray");
  return savedArray ? JSON.parse(savedArray) : [];
});
const [array2, setArray2] = useState(() => {
  // Load initial state from localStorage
  const savedArray2 = localStorage.getItem("cartArray");
  return savedArray2 ? JSON.parse(savedArray2) : [];
});
useEffect(() => {
  // Save array to localStorage whenever it changes
  localStorage.setItem("wishlistArray", JSON.stringify(array));
}, [array])
useEffect(() => {
  // Save array to localStorage whenever it changes
  localStorage.setItem("cartArray", JSON.stringify(array2));
}, [array2])

  const [addnum,setAddnum] = useState(0)
  const [bgColors, setBgColors] = useState(false)
  
  return (
    <ContextPage.Provider value={{subprice,setSubprice,subpriceof,setSubpriceof,totalof,setTotalof,itemcount01,setItemcount01,array2, setArray2,cartnum,setCartnum,buttonuse,setButtonuse,truebutton,setTruebutton,mixdata,setMixdata,trueheart,setTrueheart,runuse,setRunuse,array,setArray,addnum,setAddnum,bgColors, setBgColors }}>
      {children}
    </ContextPage.Provider>
  );
};
export default ContextPage;