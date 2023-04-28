import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'


const Projects = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass('text-animate-hover')
       }, 4000)
   },[])

  return (
    <>
      <div className='in'>
        <h1>
            <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','m','p','l','e ','t','e','d',' ','P','r','o','j','e','c','t','s']}
                    idx ={15}/> </h1>
                <div className='info'>
                    <ul>
                    <li>Sample Login Page with React Toaster Notification</li>
                    <li>Portfolio</li>
                    <li>Tenzies_App</li>
                    <li>Todo_List</li>
                    <li>CRUD operations with Sample React_App</li>
                    </ul>
                </div>             
            </div>
            <Loader type ="pacman"/>
    </>
  )
}

export default Projects
