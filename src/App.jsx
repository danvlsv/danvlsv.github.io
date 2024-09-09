import { useState } from 'react'
import photo from "/src/assets/photo.jpg"
import './App.css'

function App() {


  return (
    <>
      <div className="card">
            <img className="avatar" src={photo}/>
            <div className="card-text">
                <h3>Daniil Vlasov</h3>
                <p>Still figuring it out</p>
                <h4>Perm, Russia</h4>
            </div>
      </div>

      <div className="card" style={{height: "100px", marginTop: "30px", justifyContent: "center"}}>
        <div className="card-text" 
          style={{textAlign: "center",justifyContent:"left", marginLeft: "0px",width: "inherit"}}>
          <h3 style={{margin:"3px 0px"}}>Опыт работы</h3>
            <div style={{padding: "0px 20px"}}>
              <p style={{textAlign: "center",margin:"15px 0px"}}>Будет заполнено</p>
            </div>
                
        </div>
      </div>

      <div className="">

      </div>
    </>
  )
}

export default App
