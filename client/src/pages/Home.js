import React from "react";
import Nav from "../components/Nav"
import "./style.css"
import ProgramStart from "../components/ProgramStart"
import ReactMicrophone from "../components/ReactMicrophone"

const Home = () => {

  return (
   <>
   <Nav />
   <ProgramStart />
   <ReactMicrophone />
   </>
  )
}

export default Home;