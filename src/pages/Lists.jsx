import {useEffect, useState} from "react"
import Link from "react-router-dom"
import Home from "./Home"
import Item from "./Item"
import axios from "axios"


// pull in user's lists as an array

// in useEffect, update list state with lists

// make sure displayLists is rendering

const Lists = (props) => {
  // set state
  const [lists, setLists] = useState([])
  
  // need to bring in and map all lists from db
  
  // 
  useEffect(async () => {
    const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/lists")
    // console.log(response)
    
    
    setLists(response.data)
  }, [])
  

  // maps through array in state and renders each as list item
  
  const displayLists = lists.length > 0 ? lists.map((list, idx) => 
      <li 
        key={idx}>{list.title}</li>      
    ) : ""

  return(
    <div>
      <p>📃 Lists:</p>
      <ul>{displayLists}</ul>      
    </div>
  )
}

export default Lists