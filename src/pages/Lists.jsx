import {useEffect, useState} from "react"
import Home from "./Home"
import axios from "axios"

// pull in user's lists as an array

// in useEffect, update list state with lists

// make sure displayLists is rendering

const Lists = (props) => {
  // set state
  const [lists, setLists] = useState([])
  const [server, setServer] = useState(null)
  // need to bring in and map all lists from db
  
  // 
  useEffect(async () => {
    const response = await axios.get(process.env.REACT_APP_SERVER_URL)
    console.log(response)
    // setServer(response.data.msg)
    setLists(lists)    
  }, [])
  

  // maps through array in state and renders each as list item
  // lists wasn't array, it wasn't working
  const displayLists = lists.length > 0 ? lists.map((list, idx) => 
      <li key={idx}>{list}</li>      
    ) : ""

  return(
    <div>
      <p>this is a test</p>
      <ul>{displayLists}</ul>
      {/* <p>{server ?? "nothing here"}</p> */}
    </div>
  )
}

export default Lists