import React, { useState } from 'react'

const Pagination = ({page, setPage, maximo}) => {

    const [input, setInput] = useState(1);
    

    const nextPage=()=>{
        setInput(parseInt(input)+1);
        setPage(parseInt(page)+1)
    };
    const previusPage=()=>{
        setInput(parseInt(input)-1);
        setPage(parseInt(page)-1)
    };

    const onKeyDown = e =>{
        if(e.keyCode == 13){
            setPage (parseInt(e.target.value));
            if(
                parseInt(e.target.value<1) ||
                parseInt(e.target.value) > Math.ceil(maximo)||
                isNaN(parseInt(e.target.value))
            ){
                setPage(1);
                setInput(1);
            }else{
                setPage(parseInt(e.target.value))
            }
        }
    };

    const onChange = e =>{
        setInput(e.target.value)
    };

  return (
    <div className='page'>
        <button disabled={page===1}   className='btnA'  onClick={previusPage}>&#60;</button>
        <input  onChange={e=>onChange(e)} onKeyDown={(e)=>onKeyDown(e)} name='page' autoComplete='off' className='inputA' value={input}/>
        <p className='text'>de {maximo}</p>
        <button   disabled={page===Math.ceil(maximo) || page>Math.ceil(maximo)} className='btnA' onClick={nextPage}>&#62;</button>
    </div>
  )
}

export default Pagination