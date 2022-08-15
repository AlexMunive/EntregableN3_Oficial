import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'


function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    let numberLocation
    if (searchInput === "") {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = searchInput
    }
    const url = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(url)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))

  }, [searchInput])

  // busqueda por input


  const handleSubmit = e => {
    e.preventDefault()

    setSearchInput(e.target.search.value)
  }

  console.log(searchInput)


  return (
    <div className="App">
      <section className='conteiner'>
        <div>
        <img  className='conteiner_img'  src="./src/img/logo_2.png" alt="ricky and Morty" />
        </div>
      <form onSubmit={handleSubmit}> 
        <input id='search' type="text" placeholder='Characters Name' />
        <button><strong>Search</strong></button>
      </form>
      <LocationInfo location={location} />
      </section>      
      <div className='residents'>
        {
          location?.residents.map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))
        }

      </div>
    </div>
  )
}

export default App
