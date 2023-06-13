import React, {useState} from 'react'

const Birthdays = (examples) => {
    const {lastName, firstName, ages, hairColor} = examples

    const [age, setAges] = useState(ages)
    const addAge = () => {
        setAges(age + 1)
    }

  return (
    <div>
        <h1>{lastName}, {firstName} </h1>
        <h3>Age: {age} </h3>
        <h3>Hair Color: {hairColor} </h3>
        <button onClick = {addAge} > Birthday Button for {firstName} {lastName}</button>
        <hr></hr>
    </div>
    
  )
}

export default Birthdays