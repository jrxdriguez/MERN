import React, {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const [name, setName] = useState('')

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const AuthorObject= {name}
        axios.post('http://localhost:8000/api/authors/new', AuthorObject)
        .then((res) => {
            navigate('/')
        })
        .catch(err=>{
            const errorResponse = err.response.data.err.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key in errorResponse) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        }) 
    }

  return (
    <div className="margin"><br/>
        <h1>Favorite Authors</h1>
        <Link to={'/'}><h5>Home</h5></Link>
        <h5>Add a new author:</h5><br/>

        <form onSubmit = {handleSubmit} className="border">
            {errors.map((err, index) => <p className="redtxt" key={index}>{err}</p>)}
            <div>
                <h5>Name:</h5>
                <label></label>
                <input type="text" name="name" onChange={ (e) => setName(e.target.value) } />
            </div><br/>
            <div>
                <button className="btn btn-outline-dark"><Link to={'/'}>Cancel</Link></button> | <button className="btn btn-outline-dark">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Create