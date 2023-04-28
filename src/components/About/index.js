import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass('text-animate-hover')
       }, 4000)
   },[])

    return(
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx ={15}/>                    
                </h1>
                <p>I am Nithushan Balasingham and currently pursuing 
                    Electronic and Telecommunication engineering at Sri Lanka Technological Campus. 
                    I have completed ordinary level and advanced level.
                    </p>

                <p> I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
            </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color ='#77C3EC'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color ='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color ='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color ='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color ='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color ='#6D6D6D'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type ="pacman"/>
        </>
    )
}


export default About