import { useState } from "react";

function App(){

  let [item,setItem]=useState("");

  let products = [
    { id: 1, name: "Shoes" },
    { id: 2, name: "Shirt" },
    { id: 3, name: "Pants" }
  ];

  function handleChange(value){

    if(value=="1"){
      setItem(products[0].name);
    }else if(value=="2"){
      setItem(products[1].name);  
    }else if(value=="3"){
      setItem(products[2].name);
    }else{

    }

  }

  return(
    <>
      <input onChange={(e)=>{handleChange(e.target.value.trim())}} type="text" placeholder="Search..." />
    <h1>{item}</h1>
    </>

  )



}

export default App;