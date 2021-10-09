import { categoryList } from "./utils"

function CardView({list, setList}) {

    const categories = categoryList(list)
    console.log(categories)


    function changeCompletion (e, taskName) {
        e.preventDefault()
    
        setList((currList) => {
            const copyList = [...list]
            const taskToUpdate = taskName
            const updatedList = copyList.map((item) => {
                if (item.name === taskToUpdate) {
                    const newItem = {...item}
                    return {name: newItem.name, completed: !newItem.completed}
                } else {
                    const newItem = {...item}
                    return {name: newItem.name, completed: newItem.completed}
                }
            })
            return updatedList
        })
    }
    return (

        <section className="sortedView">
            {categories.map((category) => {

                return <div className={category}>
                    <p>{category}</p>


            <section className="cardview">
            {list.map((task)=> {
                if (task.category === category)
                {return <div className="card">
                    <button onClick={
                            e => {changeCompletion(e, task.name)}
                    }>{task.completed ? '✅' : '❌'}</button> <button>⬆</button>
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
