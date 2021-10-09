import {useState} from 'react';

function AddTask ({setList}) {
    const [newTask, setNewTask] = useState('')
    let [category, setCategory] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        setList((currList) => {
            if (category==="add new") {
                category = window.prompt("Enter new category")
            }
            const taskToAdd = {name: newTask, completed: false, category: category}
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
            <label htmlFor="category">Category</label>
                <select name="category" id="category" required value={category} onChange={
                    (e) => {setCategory(e.target.value)}
                }>
                    <option value="add new" selected>Add new...</option>
                    <option value="pet stuff">pet stuff</option>
                    <option value="chores">chores</option>
                    <option value="work stuff">work stuff</option>
                </select>
            <button className="button_slide slide_right">Submit Task</button>
        </form>
    </section>
    )
}

export default AddTask;