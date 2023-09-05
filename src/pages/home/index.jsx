import React from 'react'
import "../home/styles.css"
import Img from "../home/imgHome.jpg"
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
        <div className="container-home">
          <img className='img-1' src={Img} alt="" />
           <Link to={"/invitacion"}><button class="btn-50">Entrar</button></Link>
        </div>
    </div>
  )
}

export default Home
