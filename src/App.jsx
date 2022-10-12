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
  // const [inputCharacter, setInputCharacter] = useState()

  // useEffect(()=>{

  //   const url=`https://rickandmortyapi.com/api/character/?name=rick&status=alive`

  //   axios.get(url)
  //   .then(res=>{
  //     console.log(res.data)
  //     setInputCharacter(res.data)
  //   })
  //   .catch(err=>console.log(err))


  // },[])

  // console.log(inputCharacter)


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
    setInputCharacter(e.target.inputCharacter.value)

  }

  // console.log(searchInput)

  // por pagina

  const maximo = Math.ceil(location?.residents.length / perPage)

  // console.log(maximo)


  return (
    <div className="App">
      <section className='conteiner'>
        <img className='conteiner_img' src={rickAndMortyLogo} alt="ricky and Morty" />
        <form onSubmit={handleSubmit}>
          <input id='search' type="text" onChange={handleSubmit} placeholder='search for id location' />
          <button><span className='btnB'>Search</span></button>
        </form>
        <LocationInfo location={location} />
      </section>
      <Pagination
        page={page}
        setPage={setPage}
        maximo={maximo}
      />
      <div className='residents'>
        {
          location?.residents.slice((page - 1) * perPage, (page - 1) * perPage + (perPage)).map(url => (
            <CardResident
              key={url}
              url={url}
            />
          ))
        };
      </div>
    </div>
  )
}

export default App
