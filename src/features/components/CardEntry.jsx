import React,{useState} from 'react'
import styles from './components.module.css'
import 'animate.css';

const CardEntry = ({title}) => {


  const [toggle,setToggle] = useState(false) ; 


  const handleMouse = () => {
    setToggle(true) ; 

    setTimeout(() => setToggle(false),2000)
  }


  return (
    <div onMouseEnter={handleMouse}  className={`${styles.card_container} ${toggle ? "animate__animated animate__flipInY animate_slow 2s" : ""}`} >
        <h1>{title}</h1>
    </div>
  )
}

export default CardEntry
