import React from 'react';
import './footer.css';
import refugee from '../../assets/refugio.svg';
export default function Footer() {
 return (
   <footer>
<footer className='footer'>
    <div className='footer-img d-lg-block d-none'>
     <img src={refugee} alt='refugiado'/>
     <hr/>
     <h4>     
          Rifuĝo
</h4>
    </div>
    <div className='explore pl-3 pl-lg-0'>
        <h3 className='pr-3  '>informações</h3>
        <a>Polícia federal</a>
        <a>CAMI</a>
        <a>Adus</a>
        <a>Refúgio343</a>
        <a>ACNUR</a>
        <a>UNHCR</a>
        <a>Portal de imigração</a>
    </div>
    <div className='about-footer pl-3 pl-lg-0'>
        <h3>Sobre</h3>
        <a>Quem somos</a>
        <a>Time</a>
        <a>Blog</a>
        <a>News</a>
        
    </div>
    <div className='help pl-3 pl-lg-0'>
        <h3>AJUDA</h3>
        <a>Suporte</a>
        <a>FAQs</a>
    </div>
   </footer>
   </footer>
 );
}