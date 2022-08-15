import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useFetch = url => {

const [respon, setRespon] = useState()

useEffect(()=>{
    axios.get(url)
    .then(res=>setRespon(res.data))
    .catch(err=>console.log(err))

},[])

return respon

}

export default useFetch