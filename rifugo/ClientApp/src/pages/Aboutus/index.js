import React from 'react';
import Header from '../../components/Header';
import './about.css';
import refugee from '../../assets/Ativo 1.svg';
import Footer from '../../components/Footer';

export default function Aboutus() {
 return (
  <div className='container-center'>
  <Header/>
<div className="flex-column m-4 p-4">
       <h2 className="m-4">Ajude na quebra de barreira linguística</h2>
       <button className=' btn m-4 p-2 d-flex align-items-center'>Clique aqui</button>
       </div>
   
   <div>
   <div className="d-block justify-content-lg-start d-md-none">
       <h3 className="front__text-header d-block">Para quem?</h3>
       <h4 className="d-block">Refugiados que não conseguem achar informações sobre como tirar a documentação no Brasil.</h4>
   </div>
   <div className="d-block justify-content-lg-start d-md-none">
       <h3 className="front__text-header d-block">Por quê?</h3>
       <h4>
           Por falta de informação para os refugiados acerca de documentação, como por exemplo, o pedido de refúgio. Muitos refugiados não sabem como ou onde tirar esses documentos.
           Para isso criamos o refúgio 57.
       </h4>
   </div>
   <div className="d-block justify-content-lg-start d-md-none">
       <h3 className="front__text-header d-block">Como?</h3>
       <h4>
           Refúgio 57 foi o site que criamos para que a desinformação ou a barreira linguística não seja um problema para os refugiados. O site conta com APIs do google para geolocalização e tradução,
           também conta com tradutores voluntários para melhor comunicação.
       </h4>

   </div>
   <div className="pt-3 pb-3 rowcard">
       <div className="d-flex  flex-row justify-content-between align-items-center mb-3">
           <div className="outer-div">
               <div className="inner-div">
                   <div className="front">
                       <div className="front__bkg-photo"></div>
                       <div className="front__face-photo">
                         <img src={refugee}/>
                       </div>
                       <div className="front__text">
                           <h3 className="front__text-header d-block">Para quem?</h3>

                           <span className="front__text-hover">
                               Detalhes

                           </span>
                       </div>
                   </div>
                   <div className="back">
                       <h4 className="d-block">Refugiados que não conseguem achar informações sobre como tirar a documentação no Brasil.</h4>
                   </div>

               </div>
           </div>
</div>
</div>
</div>
<footer>
    <Footer/>
</footer>
</div>
 );
}