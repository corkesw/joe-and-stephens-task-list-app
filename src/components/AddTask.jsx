import {useState} from 'react';

function AddTask ({setList}) {
    const [newTask, setNewTask] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        setList((currList) => {
            const taskToAdd = {name: newTask, completed: false}
            const updatedList = [...currList, taskToAdd];
            return updatedList;
        })
        setNewTask('')
    }
    return (
    <section className="add-task">
        <form onSubmit={handleSubmit}>
            <label htmlFor="list-addition">Add to the list: </label>
            <input type="text" required value={newTask} onChange={(e) => {
                setNewTask(e.target.value)
            }} id="list-addition"/>
            <button className="button_slide slide_right">Submit Task</button>
        </form>
    </section>
    )
}

export default AddTask;