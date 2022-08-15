import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {
   
  const resident = useFetch(url)
 
  return (
    <article className='card'>
      <header>
        <div>
          <div className={`${resident?.status}`}>
          <h5>{`${resident?.status}`}</h5>
          </div>
        </div> 
        <img src={resident?.image} alt={`image of${resident?.name}`} />       
      </header>
      <div>
        <h1>{`${resident?.name}`}</h1>
        <hr className='hr_line'/>
        <ul>
          <h4><strong>Species: </strong>{`${resident?.species}`}</h4>
          <h4><strong>Origin: </strong>{`${resident?.origin.name}`}</h4>
          <h4><strong>Eppisodes where appear: </strong>{`${resident?.episode.length}`}</h4>         
        </ul>

      </div>
    </article>
  )
}

export default CardResident