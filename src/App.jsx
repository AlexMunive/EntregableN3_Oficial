import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import rickAndMortyLogo from './img/logo_2.png'


function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState("")
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(4)
  

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

  // por pagina

  const maximo =  perPage

  // console.log(maximo)


  return (
    <div className="App">
      <section className='conteiner'>
        <img  className='conteiner_img' src={rickAndMortyLogo} alt="ricky and Morty" />
      <form onSubmit={handleSubmit}> 
        <input id='search' type="text" placeholder='Characters Name'/>
        <button><strong>Search</strong></button>
      </form>
      <LocationInfo location={location} />
      </section>      
      <div className='residents'>
        {
          location?.residents.slice((page-1)*perPage,(page-1)*perPage+(perPage)).map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))     
        };
        {/* {
          location?.residents.map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))
        } */}
      </div>
      <Pagination page={page} setPage={setPage} maximo={maximo}/>
    </div>
  )
}

export default App
