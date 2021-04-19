import {useEffect, useState} from "react"
import {v4 as uuidV4} from "uuid";

const CurrentList = ({input, setInput, items, setItems, editItem, setEditItem}) => {

  const updateItem = (title, id, completed) => {
    const newItem = items.map((item) => 
      item.id === id ? {title, id, completed} : item
    )
    setItems(newItem)
    setEditItem("")
  }

  useEffect(() => {
    if(editItem){
      setInput(editItem.title)
    } else {
      setInput("")
    }
  }, [setInput, editItem])

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!editItem){
      setItems([...items, {id: uuidV4(), title: input, completed: false}])
    setInput("")
    } else {
      updateItem(input, editItem.id, editItem.completed)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add an item" 
        className="task-input"
        value={input}   
        onChange={handleChange}   
      />

      <button className="button-add" type="submit">
        {editItem ? "OK" : "Add" }
      </button>
    </form>
  )
}

export default CurrentList