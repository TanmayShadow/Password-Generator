import React from 'react'
import blackGithub from '../images/github-black.svg'
import whiteGithub from '../images/white-github.svg'
import linkedin from '../images/linkedin.svg'
import '../App.css'

export default function Footer(props) {
  return (
    <div className='footer d-flex align-items-center justify-content-center' style={props.mode==="dark"?{background:"black"}:{background:"#e1f9fd"}}>
      {/* <footer> */}
        <div>
            <a href="https://github.com/TanmayShadow">
                <img src={props.mode==="light"?blackGithub:whiteGithub} alt=''></img>
            </a>
            <a href="https://www.linkedin.com/in/tanmay-shindkar" >
                <img src={linkedin} alt=''></img>
            </a>
            <p>© Copyright, Envision</p>
        </div>
       {/* </footer> */}
    </div>
  )
}
