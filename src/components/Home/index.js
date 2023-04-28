import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/N.png'
import './index.scss'
import React,{ useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
const Home = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['N','i','t','h','u','s','h','a','n']
    const jobArray= ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','i','n','g',' ','I','n','t','e','r','n']

    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])
    return(
        <>
         <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={`${letterClass}_12`}>H</span>
                <span className={`${letterClass}_12`}>i</span>
                <br/>
                <span className={`${letterClass}_12`}>I</span>
                <span className={`${letterClass}_12`}>'m </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={12}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend Developer/ReactJs beginner </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
                <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
       
    )
}

export default Home