import React, { useState } from 'react'

const Pagination = ({page, setPage, maximo}) => {

    const [input, setInput] = useState(1);

    const nextPage=()=>{
        setInput(input+1);
        setPage(page+1)
    };
    const previusPage=()=>{
        setInput(input+1);
        setPage(page+1)
    };

  return (
    <div className='page'>
        <button  className='btnA'  onClick={nextPage}>&#60;</button>
        <input className='inputA'  type="text" />
        <p> de {maximo}</p>
        <button  className='btnA' onClick={previusPage}>&#62;</button>
    </div>
  )
}

export default Pagination