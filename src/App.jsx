import { Fragment } from "react"
import"./assets/newstyle.css"



function App() {
//  thaan component
let name = 'nguyen van a'
let blue = {color:"blue"}
const handleClick =()=>{
  alert("toi an com roi")
}
  return (
    <>
      <h1 className="titlle">hello anh em, minh ten la {name}</h1>
      <p style={blue}> day la buoi 3</p>
      <button onClick={handleClick}>ban an com chua</button>
    </>


  )
}

export default App
