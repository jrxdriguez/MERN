import React, {useEffect, useState} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            const author = res.data.results
            console.log(author)
            setName(author.name)
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
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()
        const authorObj = {name}
        axios.put(`http://localhost:8000/api/authors/${id}`, authorObj)
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
        <h5>Edit this author:</h5><br/>

        <form onSubmit = {handleUpdate} className="border">
        {errors.map((err, index) => <p className="redtxt" key={index}>{err}</p>)}
            <div>
                <h5>Name:</h5>
                <label></label>
                <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value) } />
            </div><br/>
            <div>
            <button className="btn btn-outline-dark"><Link to={'/'}>Cancel</Link></button> | <button className="btn btn-outline-dark">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Edit