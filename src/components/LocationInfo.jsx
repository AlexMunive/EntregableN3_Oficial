import React from 'react'


const LocationInfo = ({ location }) => {
  console.log(location)

  return (
    <article>
      <table>
        <tbody>
        <tr>
          <th><h3><i className='bx bxs-ghost'></i><strong> Name:</strong><br />{location?.name}</h3></th>
          <th><h3><i className='bx bxs-ghost'></i><strong> Type:</strong><br />{location?.type}</h3></th>
          <th><h3><i className='bx bxs-ghost'></i><strong> Dimensión: </strong><br />{location?.dimension}</h3></th>
          <th><h3><i className='bx bxs-ghost'></i><strong> Population: </strong><br />{location?.residents.length}</h3></th>
        </tr>
        </tbody>
      </table>
    </article>
  )
}

export default LocationInfo