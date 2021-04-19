

const Item = ({ items, setItems, setEditItem }) => {

  const handleComplete = (item) => {
    setItems(
      items.map((item) => {
        if(item.id === item.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    )
  }

  const handleEdit = ({id}) => {
    const findItem = items.find((item) => item.id === id)
    setEditItem(findItem)
  }


  const handleDelete = ({id}) => {
    setItems(items.filter((item) => item.id !== id))
  }




  return(
    <div>
      {items.map((item) => (
        <li className="list-item" key={item.id}>
          <input 
            type="text"
            value={item.title}
            className={`list ${item.isDone ? "done" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div className="icons">
            
            <button className="button-complete task-button" onClick={() => handleComplete(item)} >
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(item)} >
              <i className="fa fa-edit"></i>
            </button>
            <button 
              className="button-delete task-button" onClick={() => handleDelete(item)} >
                <i className="fa fa-trash"></i>
            </button> 
          </div>
        </li>
      ))}
    </div>
  )
}

export default Item