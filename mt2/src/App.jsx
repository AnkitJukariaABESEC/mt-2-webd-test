import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AnkitImg from  './assets/Ankit.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Student Profile Dashboard</h1>
    <div style={{backgroundColor:"grey",height:"40vw",display:"flex",padding:"30px",gap:"40px",margin:"auto"}}>
   
      <div style={{color:"black",border:"2px solid black",borderRadius:"5px",height:"300px",width:"300px",backgroundColor:"white"}}>
        <img src={AnkitImg} alt="" height={"150px"} /> <br />
        <b>Name:</b> Ankit Jukaria <br />
        <b>Course:</b> B.Tech CSE <br />
        <b>Year:</b> 1st Year <br />
        <b>CGPA:</b> 8.5
      </div>
      <div style={{color:"black",border:"2px solid black",borderRadius:"5px",height:"300px",width:"300px",backgroundColor:"white"}}>
       <img src={AnkitImg} alt="" height={"150px"}/> <br />
        <b>Name:</b> Priya Singh <br />
        <b>Course:</b> BCA <br />
        <b>Year:</b> 2nd Year <br />
        <b>CGPA:</b> 9.1
      </div>
    </div>
    </>
  )
}

export default App
