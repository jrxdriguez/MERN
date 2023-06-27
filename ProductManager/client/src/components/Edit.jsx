import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

function Edit() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            const product = res.data.results
            console.log(product)
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch((err) => {
            console.log('This is our Details component get error:', err)
        })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()
        const productObj = {title, price, description}
        axios.put(`http://localhost:8000/api/products/${id}`, productObj)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Edit</h1>
            <form onSubmit = {handleUpdate}>
                <div className = "form">
                    <label>Title: </label> 
                    <input type="text" name="title" value={title} onChange={ (e) => setTitle(e.target.value) } />
                </div><br></br>
                <div>
                    <label>Price: </label> 
                    <input type="text" name="title" value={price}  onChange={ (e) => setPrice(e.target.value) } />
                </div><br></br>
                <div>
                    <label>Description: </label> 
                    <input type="text" name="title" value={description}  onChange={ (e) => setDescription(e.target.value) } />
                </div><br></br>
                
                <button type="submit" className="btn btn-outline-dark">Edit</button>
            </form><hr/>
        </div>
    )
    }

export default Edit