import React, {useEffect, useState} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const [authorList, setAuthorList] = useState([])
    const [deleteToggle, setDeleteToggle] = useState(false)

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log('Here is Dashboard data:', res.data.results)
            setAuthorList(res.data.results)
        })
        .catch((err) => {
            console.log(`This is Dashboard useEffect catch all in action: ${err}`)
        })
    }, [deleteToggle])

    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log('This is the handleDelete function: ', id)
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className="margin">
        <br/>
        <h1>Favorite Authors</h1>
        <Link to={'/create'}><h5>Add an author</h5></Link>
        <h5>We have quotes by:</h5><br/>
        <table className="table">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authorList.map((author, i) => {
                        return (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td><button className="btn btn-outline-primary"><Link to={`/edit/${author._id}`}>Edit</Link></button> | <button onClick={(e) => handleDelete(e, author._id)} className="btn btn-outline-danger">Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard