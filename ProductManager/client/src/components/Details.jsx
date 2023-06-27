import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

function Details() {
    const [product, setProduct] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data.results)
            setProduct(res.data.results)
        })
        .catch((err) => {
            console.log('This is our Details component get error:', err)
        })
    }, [id])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div><br/>
        <h1>Details</h1><hr/>
        <h2>{product.title}</h2>
        <h4>Price: {product.price}</h4>
        <h4>Description: {product.description}</h4><br/>

        <button onClick={handleDelete} className="btn btn-outline-dark"> Delete</button>  
        <button className="btn btn-outline-dark"><Link to={`/edit/${product._id}`}>Edit</Link></button>
    </div>
  )
}

export default Details