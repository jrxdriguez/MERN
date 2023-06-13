import React, {useState} from 'react'

const TodoListForm = () => {
    // State variables: first name, last name, email, password, confirm password

    const [task, setTask] = useState("", false)
    
    let [listOfTasks, setListOfTasks] = useState([])

    const createTask = (e) => {
        e.preventDefault()
        let taskObject = {task}
        setListOfTasks([...listOfTasks, taskObject])
    }

    const deleteTask = (idx) => {
        console.log("Deleting task:", idx)
        
        let filteredCopy = listOfTasks.filter( (task, i) => {
            console.log("Task and index values are passed:", task,i)
            return i !== idx
        })
        setListOfTasks(filteredCopy)
    }
  return (
    <div>
        <form onSubmit={ createTask } className = "form" >
            <h1>What is there to do?</h1><br></br>
            <div>
                <label></label> 
                <input type="text" onChange={ (e) => setTask(e.target.value) } />
            </div>
            <input type="submit" value="Add" className = "btn btn-outline-dark mt-3" />
        </form><hr></hr>
        <div className = "form2">
            <h4>Today's todo list: </h4><br></br>
            {
                listOfTasks.map((item, index) => {
                    return(
                        <div key = {index}>
                            <div className = "flex">
                                <input type = "checkbox" id = "cbox"></input>
                                <label for = "cbox"><h5>{item.task}</h5></label>
                            </div>
                            
                            <button onClick={() => deleteTask(index)} className = "btn btn-outline-dark mt-3">Delete Task</button><hr></hr>
                        
                        </div>
                        
                        
                    )
                }
                )
            }
            
        </div>
    </div>
  )
}

export default TodoListForm

