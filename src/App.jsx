import { useState } from 'react'
import './App.css'
import Modal from "./modal"

function App() {

  const [showModal, setShowModal] = useState(false)
  

  return (
    <div>
      <div className="main">
        <h1>User Details Modal</h1>
        <button style={{ color: 'white', background: 'blue' }} onClick={()=>setShowModal(true)}>Open Form</button>
      </div>
      <Modal show={showModal}/>
    </div>
  )
}

export default App
