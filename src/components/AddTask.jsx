import {useState} from 'react';
import { categoryList } from './utils';
import styles from './AddTask.module.css';

function AddTask ({setList, list}) {
    const [newTask, setNewTask] = useState('')
    let [category, setCategory] = useState('')

    const categories = categoryList(list)
   
    function handleSubmit(e) {
        e.preventDefault();
        setList((currList) => {
            if (category==='') {
                category='add new'
            }
            if (category==="add new") {
                category = window.prompt("Enter new category")
            }
            const taskToAdd = {name: newTask, completed: false, category: category.toUpperCase()}
            let taskUnique = true
            list.forEach((item) => {
                if (item.name === taskToAdd.name && item.category === taskToAdd.category) {
                    taskUnique = false
                }
            })
            if (!taskUnique) {
                alert(`${taskToAdd.name} already exists in ${taskToAdd.category}`)
            }
            return (taskUnique ? [...currList, taskToAdd] : [...currList])
        })
        setNewTask('')
    }
    return (

    <section className={styles.addtaskcontainer}>
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="list-addition">Task: </label></td>
                        <td><input type="text" required value={newTask} onChange={(e) => {
                        setNewTask(e.target.value)
                        }} id="list-addition"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="category">Category: </label></td>
                        <td><select className={styles.dropdown} name="category" id="category" required value={category} onChange={
                        (e) => {setCategory(e.target.value)}
                         }>
                        <option value="add new">Add new...</option>
                        {
                        categories.map((category) => {
                            return <option key={category} value={category}>{category}</option>
                        })
                        }
                        </select></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className="button_slide slide_right">Add Task</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </form>
    </section>
    )
}

export default AddTask;