
import React, { useState, useEffect }  from "react"
import ReactDom from 'react-dom'
import './App.css'
import shape1 from './img/circle.svg'
import shape2 from './img/semicircle.svg'
import shape3 from './img/squiggly.svg'
import shape4 from './img/triangle.svg'
import shape5 from './img/circle.svg'
import shape6 from './img/semicircle.svg'
import shape7 from './img/squiggly.svg'
import shape8 from './img/triangle.svg'


function App (){
  
  const [randomQuote, setQuote] = useState('');

  const getQuote = () =>{
    fetch ("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      let randomNum = Math.floor(Math.random() * data.length)
      setQuote(data[randomNum])
    })
  } 
  useEffect(() => {
    getQuote()
  }, [])
  return (
    
    <div className="section__main">
      <h1>{`Explore the best quotes`}</h1>
      <section className="hidden">
        <h2>{randomQuote.text}</h2>
        <h4>{randomQuote.author}</h4>
      </section>

      <div>
        <img className= "shape shape--1" src = {shape1} alt = 'circle'></img>
        <img className= "shape shape--2" src = {shape2} alt = 'semicircle'></img>
        <img className= "shape shape--3" src = {shape3} alt = 'squiggly'></img>
        <img className= "shape shape--4" src = {shape4} alt = 'triangle'></img>
        <img className= "shape shape--5" src = {shape5} alt = 'circle'></img>
        <img className= "shape shape--6" src = {shape6} alt = 'semicircle'></img>
        <img className= "shape shape--7" src = {shape7} alt = 'squiggly'></img>
        <img className= "shape shape--8" src = {shape8} alt = 'triangle'></img>
      </div>
      
      <button className="button-top" onClick={getQuote}>Generate</button>
      
    </div>
  )
}



export default App;