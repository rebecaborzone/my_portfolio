import React from 'react';
import '../styles/contact.css';
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";

function Contact() {
    return (
        <>
        <img className="arcoiris" src="https://i.ibb.co/XSXLGby/arcoiris.png" alt="arcoiris"/>

        <div style={{display: 'flex', flexDirection:'column', height:'100vh', width:'100vw', boxShadow: 'inset 0 0 0 4px #ef476f, inset 0 0 0 8px #ffd166, inset 0 0 0 12px #125B50', alignItems: 'center', padding: '15vh', zIndex:'1'}}>
            <h1 style={{fontFamily: 'BarbraRegular', fontSize: 70, lineHeight: '70px', width:'100vw', textAlign:'center', color:'#125B50'}}>The End</h1>
            <h1 className="contactText"  style={{ fontWeight:800 }}> - MUCHAS GRACIAS POR LEER HASTA ACÁ -</h1>
            <img style={{width:'100px', margin: '1rem' }} src="https://i.ibb.co/N18pNrJ/carita.png" alt="arcoiris"/>
            <h1 className="contactText">DESCARGA MI CV</h1>
            <div style={{ display: 'flex', alignItems:'center'}}>
                <a style={{ color:'#125B50', margin: '.2rem'}} href="https://www.linkedin.com/in/rebeca-borzone/">
                    <RiLinkedinLine size={24}/>
                </a>
                <a style={{ color:'#125B50', margin: '.2rem'}} href="https://github.com/rebecaborzone">
                    <VscGithubAlt size={24} />
                </a>
            </div>
        </div>
        </>
    )
}

export default Contact;