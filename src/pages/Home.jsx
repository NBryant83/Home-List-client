import {useState, useEffect} from "react"
import Navbar from "../components/Navbar"
import CurrentList from "./CurrentList"

import Item from "./Item"
import '../index.css';
import Welcome from "./Welcome";
import Header from "./Header";


const Home = () => {
  const initialState = JSON.parse(localStorage.getItem("items")) || [];
  const [input, setInput] = useState("");
  const [items, setItems] = useState(initialState);
  const [editItem, setEditItem] = useState(null);
  
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))    
  }, [items])
  
  
  return (
    <div className="container">
      <div>
        <Navbar />        
      </div>
      <div>
        <Header />        
      </div>
      <div className="app-wrapper">        
          <form 
            input={input}
            setInput={setInput}
            items={items}
            setItems={setItems}
            editItem={editItem}
            setEditItem={setEditItem}
          />
        </div>
        <div>
          <CurrentList 
            items={items} 
            setItems={setItems}
            editItem={editItem}
            setEditItem={setEditItem}  
            input={input}
            setInput={setInput}         
          />
        </div>
      </div>
  );
}

export default Home;
