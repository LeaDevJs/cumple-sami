import React from 'react'
import "../home/styles.css"
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
        <div className="container-home">
           <Link to={"/invitacion"}><button class="btn-50">Entrar</button></Link>
        </div>
    </div>
  )
}

export default Home
