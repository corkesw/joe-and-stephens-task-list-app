
import styles from "./CardView.module.css";

function CardView({ list, setList, categories }) {
  list.sort((a, b) => {
    return !a.important - !b.important;
  });
  console.log(list, "<<<<<<< list");
  console.log(categories, "<<<<<<<<<< categories")

  function changeCompletion(e, taskName) {
    e.preventDefault();

    setList((currList) => {
      const copyList = [...list];
      const taskToUpdate = taskName;
      const updatedList = copyList.map((item) => {
        if (item.name === taskToUpdate) {
          const newItem = { ...item };
          return {
            name: newItem.name,
            completed: !newItem.completed,
            category: newItem.category,
            important: newItem.important
          };
        } else {
          const newItem = { ...item };
          return {
            name: newItem.name,
            completed: newItem.completed,
            category: newItem.category,
            important: newItem.important
          };
        }
      });
      return updatedList;
    });
  }

  function changeImportance(e, taskName) {
    e.preventDefault();

    setList((currList) => {
    const copyList = [...currList]
    const taskToUpdate = taskName;
    const updatedList = copyList.map((item) => {
        if (item.name === taskToUpdate) {
            const newItem = {...item};
            return {
                name: newItem.name,
                completed: newItem.completed,
                category: newItem.category,
                important: !newItem.important
            }
            } else {
                const newItem = {...item}
                return {
                    name: newItem.name,
                completed: newItem.completed,
                category: newItem.category,
                important: newItem.important
                }
            }
        })
        return updatedList
    })
  }

  function deleteTask(e, taskName) {
    e.preventDefault();

    setList((currList) => {
      const taskToUpdate = taskName;
      const copyList = [...list];
      const filteredList = copyList.filter((item) => {
        return item.name !== taskToUpdate;
      });
      return filteredList;
    });
  }
  return (
    <section className="sortedView">
      {categories.map((category) => {
        return (
          <div key={category} className={category}>
            <p>{category}</p>

            <section className={styles.cardview}>
              {list.map((task) => {
                if (task.category === category) {
                  return (
                    <div
                      key={`${category}${task.name}`}
                      className={
                        task.important ? styles.importantcard : styles.card
                      }
                    >
                      <button
                        onClick={(e) => {
                          changeCompletion(e, task.name);
                        }}
                      >
                        {task.completed ? "✅" : "❌"}
                      </button>{" "}
                      <button
                        onClick={(e) => {
                          deleteTask(e, task.name);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={(e) => {
                          changeImportance(e, task.name);
                        }}
                      >
                        !
                      </button>
                      <p>{task.name}</p>
                    </div>
                  );
                }
              })}
            </section>
          </div>
        );
      })}
    </section>
  );
}

export default CardView;
