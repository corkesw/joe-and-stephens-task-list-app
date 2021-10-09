// function DisplayList ({list, setList}) {
//     function changeCompletion (e, taskName) {
//         e.preventDefault()
    
//         setList((currList) => {
//             const copyList = [...list]
//             const taskToUpdate = taskName
//             const updatedList = copyList.map((item) => {
//                 if (item.name === taskToUpdate) {
//                     const newItem = {...item}
//                     return {name: newItem.name, completed: !newItem.completed}
//                 } else {
//                     const newItem = {...item}
//                     return {name: newItem.name, completed: newItem.completed}
//                 }
//             })
//             return updatedList
//         })
//     }

//     function deleteTask (e, taskName) {
//         e.preventDefault()

//         setList((currList) => {
//             const taskToUpdate = taskName
//             const copyList = [...list]
//             const filteredList = copyList.filter((item) => {
//                return item.name !== taskToUpdate
//             })
//             return filteredList
//         })
//     }

//     if (list.length === 0) {
//         return <section className="noList">
//             <p>Please add some tasks</p>
//         </section>
//     } else {
//     return (
//     <section className="display-list">
//         <table className="task-table">
//             <thead>
//             <tr>
//                 <th className="col1">Task</th>
//                 <th>Completed</th>
//                 <th>Mark Complete</th>
//                 <th>Delete Task</th>
//             </tr>
//             </thead>
//             <tbody>
//             {list.map((task) => {
                 
//                     return(<tr key={task.name}><td>{task.name}</td>
//                         <td className="complete">{task.completed ? '✅' : '❌'}</td>
//                         <td className="col3"><button onClick={
//                             e => {changeCompletion(e, task.name)}
//                         } className="mark" type="button">{task.completed ? 'Undo' : 'Complete'}</button></td>
//                         <td className="col4"><button onClick={
//                             e => {deleteTask(e, task.name)}
//                         } >Delete</button></td>
//                       </tr> 
//                     )
//                 } 
//             )}
//             </tbody>
//         </table>
//     </section>

//     )
// }
// }
// export default DisplayList;