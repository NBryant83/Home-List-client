// useEffect for axios grab lists from db
import {useEffect, useState} from "react"
import Lists from "./Lists";
// map to user interface element (list/home tag/component)


const Home = (props) => {

  const [input, setInput] = useState("")
  const [item, setItem] = useState("")

  const [list, setList] = useState([])

  // newList rendering on page

  const handleChange = e => {
    setInput(e.target.value);

  }
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input)
    
    setInput("");
  }

  

  return(
    <div>      
      <section>
        <h2>Hi user 👥, new list or running off with an established one? </h2>
      </section>

      <div className="list-container">
        <section className="old-stuff">
          <div>
              <Lists />
          </div>          
        </section>
        
        <section className="new-stuff">          
          <form onSubmit={handleSubmit}>

            <label htmlFor="list-item" />
            <input 
              type="text" 
              id="list-item" 
              placeholder="add an item" 
              onChange={handleChange}
              value={input}
            />

            <input 
              type="submit" 
              id="button" 
              value="add item to new list"               
            />

          </form>
        </section>
        
      </div>
    </div>


  )
}

export default Home