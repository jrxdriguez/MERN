import React, {useState} from 'react'

const Form = () => {
    // State variables: first name, last name, email, password, confirm password

    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    let [listOfUsers, setListOfUsers] = useState([])

    const createUser = (e) => {
        e.preventDefault()
        let userObject = {first, last, email, password, confirm}
        setListOfUsers([...listOfUsers, userObject])
    }
    const alertMessage = () => {
        if (first.length, last.length < 2) {
            return "First/Last name must be at least 2 characters!"
        } else if (email.length < 5) {
            return "Email must be at least 5 characters!"
        } else if (password != confirm) {
            return "Passwords MUST match! "
        } else if (password.length < 8) {
            return "Password must be at least 8 characters!"
        } 
    }

  return (
    <div>
        <br></br>
        <form onSubmit={ createUser } className = "form" >
            <p className = "redtxt"> {alertMessage()} </p>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirst(e.target.value) } />
            </div><br></br>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLast(e.target.value) } />
            </div><br></br>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div><br></br>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div><br></br>
            <div>
                <label> Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirm(e.target.value) } />
            </div><br></br>
            <input type="submit" value="Create User" className = "btn btn-outline-dark mt-3" />
        </form><hr></hr>

        <div className = "form2">
            <h3>Your Form Data</h3><br></br>
            {
                listOfUsers.map((user, index) => {
                    return(
                        <div key = {index}>
                            <h5>First Name: {user.first}</h5>
                            <h5>Last Name: {user.last}</h5>
                            <h5>Email: {user.email}</h5>
                            <h5>Password: {user.password}</h5>
                            <h5>Confirm Password: {user.confirm}</h5>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Form

