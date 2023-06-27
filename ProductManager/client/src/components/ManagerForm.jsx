import React, {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const MangerForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const productObject= {title, price, description}
        axios.post('http://localhost:8000/api/products/new', productObject)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log('This is our create catch error:', err)
        })
    }

    const [productList, setProductList] = useState([])

    useEffect (() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log('This is my ManagerForm useEffect catch all in action:', res.data.results)
            setProductList(res.data.results)
        })
        .catch((err) => {
            console.log(`This is my ManagerForm useEffect catch all in action: ${err}`)
        })
    }, [])

    return (
        <div>
            <br></br>
            <h1>Product Manager</h1><br/>
            <form onSubmit = {handleSubmit}>
                <div className = "form">
                    <label>Title: </label> 
                    <input type="text" name="title" onChange={ (e) => setTitle(e.target.value) } />
                </div><br></br>
                <div>
                    <label>Price: </label> 
                    <input type="text" name="price"  onChange={ (e) => setPrice(e.target.value) } />
                </div><br></br>
                <div>
                    <label>Description: </label> 
                    <input type="text" name="description"  onChange={ (e) => setDescription(e.target.value) } />
                </div><br></br>
                
                <button type="submit" className="btn btn-outline-dark">Create</button>
            </form><hr/>

            <div>
                <h1>All Products:</h1>
                <div>
                    {
                        productList.map((product, i) => {
                            return (
                                <div key = {i}>
                                    <h3><Link to={`/details/${product._id}`}>{product.title}</Link></h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    )
    }

    



export default MangerForm
