import React from 'react';
import './home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import refugee from '../../assets/Ativo 1.svg';
export default function Home() {
 return (
  <div className='container-center'>
    <Header/>
  <div className="flex-column m-4 p-4">
         <h2 className="m-4">Ajude na quebra de barreira linguística</h2>
         <button className=' btn m-4 p-2 d-flex align-items-center'>Clique aqui</button>
         </div>
    <div class="cards p-1 ">
    <div class=" d-flex justify-content-between align-items-center mt-4 flex-lg-row d-flex mb-3 mb-lg-4">
        <div class="cardum mb-sm-3 m-3 mb-lg-0 mr-2 mb-lg-4">
        <img src={refugee} alt='refugiados'/> 
        </div>
        <div class="card1 mb-sm-3 m-2 d-sm-block d-none mb-lg-4">
        <img src={refugee} alt='refugiados'/>
        </div>
        <div class="card2 mb-sm-3 m-2 d-none d-md-block mb-lg-4">
        <img src={refugee} alt='refugiados'/>
        </div>
        <div class="card3 mb-sm-3 m-2 d-none d-lg-block mb-lg-4">
        <img src={refugee} alt='refugiados'/>
        </div>
    </div>
    <div className='d-flex flex-column m-5 words'>
      <h2>Conheça Rifugô</h2>
      <div>
      <h5>Rifugô significa Refúgio em Esperanto</h5>
      <span>Esperanto foi criado com a intenção de gerar<br/>
     maior entendimento entre os povos que quebraria a <br/>
     barreira linguística. <br/>
     O termo esperanto significa "aquele que tem esperança".<br/> </span>
      <span>Rifugô é um site com o foco na documentação <br/>
      dos refugiados e no combate da barreira linguística <br/>
      que atinge esse grupo minoritário.</span> <br/>
      <span>Com o design totalmente pensado nos refugiados,<br/>
      as cores são em homenagem a bandeira dos refugiados.
       </span>
       </div>
       <div className='m-4'>
         <button className='btn' type='button'>Saiba mais</button>
       </div>
       <div className=' photo d-flex justify-content-end'>
        <img src={refugee} alt='refugiados'/>
       </div>
    </div>
  </div>
  <footer>
<Footer/>
  </footer>
</div>
 )
}