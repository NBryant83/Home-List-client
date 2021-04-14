
const Home = () => {
  return(
    <div>      
      <section>
        <h2>Hi user 👥, what would you like to do? </h2>
      </section>

      <div className="list-container">
        <section className="new-stuff">
          <h3>New List 📝 </h3>
          <h3>New Template 📝 </h3>
        </section>
        
        <section className="old-stuff">
          <h3>Choose List 📄 </h3>
          <h3>Choose Template 📄 </h3>
        </section>
        
      </div>
    </div>


  )
}

export default Home