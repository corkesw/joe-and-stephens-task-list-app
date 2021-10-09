import { categoryList } from "./utils"

function CardView({list, setList}) {

    const categories = categoryList(list)
    
    function changeCompletion (e, taskName) {
        e.preventDefault()
    
        setList((currList) => {
            const copyList = [...list]
            const taskToUpdate = taskName
            const updatedList = copyList.map((item) => {
                if (item.name === taskToUpdate) {
                    const newItem = {...item}
                    return {name: newItem.name, completed: !newItem.completed, category:newItem.category}
                } else {
                    const newItem = {...item}
                    return {name: newItem.name, completed: newItem.completed, category:newItem.category}
                }
            })
            return updatedList
        })
    }

    function deleteTask (e, taskName) {
        e.preventDefault()

        setList((currList) => {
            const taskToUpdate = taskName
            const copyList = [...list]
            const filteredList = copyList.filter((item) => {
               return item.name !== taskToUpdate
            })
            return filteredList
        })
    }
    return (

        <section className="sortedView">
            {categories.map((category) => {

                return <div key={category} className={category}>
                    <p>{category}</p>


            <section className="cardview">
            {list.map((task)=> {
                if (task.category === category)
                {return <div key={`${category}${task.name}`} className="card">
                    <button onClick={
                            e => {changeCompletion(e, task.name)}
                    }>{task.completed ? '✅' : '❌'}</button> <button onClick={
                        e => {deleteTask(e, task.name)}
                    } >Delete</button>
                    <p>{task.name}</p>
                    
                    </div>}

            })}
            
        </section>


                </div>

            })}

        </section>




        
    );
}

export default CardView;
