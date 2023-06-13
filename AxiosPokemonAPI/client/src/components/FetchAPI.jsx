import React, {useState,} from 'react'
import axios from 'axios'


const FetchAPI = () => {
  const [poke, setPoke] = useState([])
  
  const fetchData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      console.log(response.data.results)
      setPoke(response.data.results)
    })
    .catch((error) => {
        console.log("This is an error from catch method: ", error)
    })
  }


  return (
    <div>
        <br></br><h1>Fetch API</h1><br></br>
        <button onClick ={fetchData} className = "btn btn-outline-dark" >Fetch Pokemon</button><hr></hr>
        {
          poke.map((p, i) => {
            return (
                <div key={i}>
                    <h4>{p.name}</h4>
                </div>
            )
          })
        }
    </div>
  )
}

export default FetchAPI