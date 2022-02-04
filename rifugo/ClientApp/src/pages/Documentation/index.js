import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo2 from '../../assets/logo2.svg';
import './doc.css';


export default function Documentation() {
 return (
   <div className='container-center'>
   <Header/>
   <div className="flex-column m-4 p-5">
        <h2  className="mb-3 mr-3 mt-4">Leer en espanõl</h2>
        <a type='button' href='/documentacion' className='btn'>click</a>
    </div>

    <div className=" doc">
        <div>
        <h2 class=" d-flex justify-content-start ml-3">PROCEDIMENTO DO PEDIDO DE REFÚGIO </h2>
        <h3 class=" d-flex justify-content-start text-align-center ml-3"> Para registrar a sua solicitação de refúgio</h3>
        
            <span class="">É necessário preencher um TERMO DE SOLICITAÇÃO DE REFÚGIO em qualquer posto da Polícia Federal.</span> <br/>
            <span class="">
                Informar um <b>ENDEREÇO</b> (onde você mora ou está hospedado e pode ser encontrado), <b>TELEFONE</b> e <b>EMAIL</b> para contato.
            </span>
        </div>
       
            <span class="">
                É muito importante que você mantenha seus contatos atualizados na Polícia Federal e no <b>CONARE</b></span> <br/> <span> para que você possa receber todas as comunicações ou citações que sejam necessárias.
                </span> <br/> <span>  Em caso de mudança, informe o <b>CONARE</b> através do email conare@mj.gov.br.
            </span>
            <h4 class=" d-flex justify-content-start m-3">Importante!</h4>
            <span class="">
                Para que o protocolo provisório continue válido e você possa continuar trabalhando regularmente, </span> <br/> <span>é necessário renová-lo na Polícia Federal a cada 1 ano.
                </span> <br/> <span>
                Os solicitantes que não renovam o protocolo no prazo sujeitam-se ao arquivamento do seu pedido de refúgio. </span> <br/> <span>
                Fique atento à data de renovação anotada em seu protocolo </span> <br/> <span>e compareça na Polícia Federal antes da data de vencimento.
            </span>
            <div class=" photo d-lg-flex d-none justify-content-end align-items-end">
               <img src={logo2}/>
            </div>
        </div>
    <div class="doc">
        <h3 class=" d-flex justify-content-start ml-3 ">Após registrar sua solicitação na Polícia Federal</h3>
        <div>
            <span class="">
                Você receberá um <b>PROTOCOLO PROVISÓRIO</b>, válido por 1 ano e renovável até a decisão final do <b>CONARE</b> sobre o seu pedido de refúgio.</span> <br/> <span>
                Este protocolo será seu <b>DOCUMENTO DE IDENTIDADE</b> no Brasil.</span> <br/> <span>
                Ele serve de prova da sua situação migratória regular e de que você está protegido e não pode ser devolvido para país onde sua vida esteja em risco.</span> <br/> <span>
                Com este protocolo você terá direito a obter <b>CARTEIRA DE TRABALHO</b> (CTPS) e <b>CADASTRO DE PESSOA FÍSICA</b> (CPF) </span> <br/> <span> e acessar todos os serviços públicos disponíveis no Brasil.
            </span>
        </div>
        <div>
            <span class="">
                Terá o direito de ser entrevistado pessoalmente por um funcionário do CONARE</span> <br/> <span>ou da Defensoria Pública da União, do sexo que você preferir, que lhe perguntará em detalhes os motivos que o levaram a sair do seu país.
                </span> <br/> <span>
                A entrevista será realizada num idioma que você compreenda e, se necessário, você tem <b>DIREITO A UM INTÉRPRETE</b>.
            </span>
        </div>
        <div>
            <h4 class=" d-flex justify-content-start ml-3 mt-3">O que é o CPF e quem pode solicitá-lo?</h4>
            <span class="">
                O CPF é um dos principais documentos para cidadãos residentes no Brasil, pois permite o acesso a uma série de facilidades.</span> <br/> <span>Por exemplo, registro em
                instituições públicas de educação, a abertura de contas em bancos e outras operações financeiras. </span> <br/> <span>Qualquer pessoa física, nacional ou estrangeira, pode solicitar a inscrição no CPF.
            </span>
        </div>
        <div class="d-none d-lg-block">
            <h4 class=" d-flex justify-content-start ml-3 mt-3">Quais são os documentos necessários para solicitar o CPF?</h4>
            <span class="">Os maiores de 18 anos deverão apresentar o original ou a cópia autenticada do seu documento de identificação.</span> <br/>
            <span class=""> Os menores de 18 anos deverão apresentar o original ou a cópia autenticada do seu documento de identificação </span> <br/> <span> e o documento de identificação de um dos pais ou responsável.</span>
        </div>
    </div>
    
    <div className='doc'>
        <h3 class=" d-flex justify-content-start ml-3">CARTEIRA DE TRABALHO E PREVIDÊNCIA SOCIAL (CTPS)</h3>

        <h4 class=" d-flex justify-content-start m-3">O que é a CTPS e quem pode solicitá-la?</h4>
        <span class="">
            A Carteira de Trabalho e Previdência Social (CTPS) é o documento que comprova toda a vida funcional  do trabalhador </span> <br/> <span> e autoriza as empresas a contratá-lo como empregado.</span> <br/> <span>
            Este documento é obrigatório para o exercício de atividades profissionais </span> <br/> <span>e pode ser solicitado por qualquer pessoa maior de 14 anos, nacional ou estrangeira, com residência regular no Brasil.
        </span>
        <h4 class=" d-flex justify-content-start m-lg-3">Onde posso solicitar a CTPS?</h4>
        <span class="">
            O interessado em tirar ou renovar a Carteira de Trabalho e Previdência Social 
            </span> <br/> <span> deverá dirigir-se à Superintendência Regional do Trabalho e Emprego (SRTE) 
                </span> <br/> <span>ou à Gerência Regional mais próxima da sua residência, com todos os documentos necessários em mãos.
                </span> <br/> <span>
            Informações sobre a localização dos postos de atendimento podem ser obtidas pelo telefone 158 na Central de Atendimento Alô Trabalho.
        </span>
        <h4 class=" d-flex justify-content-start m-lg-3">Quais os documentos necessários para a CTPS?</h4>
        <ul>
            <li class=""> Duas fotos em tamanho 3cmx4cm, com fundo branco, coloridas ou em preto-e-branco, iguais e recentes;</li>
            <li class=""> Protocolo Provisório expedido pela Polícia Federal original acompanhado de cópia.</li>
        </ul>
        </div>
        <div className='doc'>
        <h3 class=" d-flex justify-content-start ml-3">SE O SEU PEDIDO DE REFÚGIO FOI NEGADO</h3>
            <span >
                Apresentar um recurso para O Ministro da Justiça no prazo de <b>15 DIAS</b> contados a partir do recebimento da notificação.</span> <br/> <span>
                O pedido de revisão da decisão do CONARE deve ser fundamentado, ou seja, deve indicar </span> <br/> <span> e explicar detalhadamente as razões pelas quais você não concorda com a decisão</span> <br/> <span> e se o problema da decisão está na interpretação dos fatos ou aplicação das regras ao caso.
            </span> <br/>
            <span>
                Você pode ser <b>ASSISTIDO POR UM ADVOGADO</b> da Defensoria Pública da União </span> <br/> <span> ou das organizações parceiras do <b>ACNUR</b> no momento de fazer o seu <b>RECURSO</b>.</span> <br/> <span>
                Para tanto você deverá buscar uma destas entidades logo que receber a informação sobre a decisão </span> <br/> <span> pois o recurso deve ser entregue na Policia Federal no prazo máximo de 15 dias do recebimento da notificação. 
            </span> <br/>
            <span>
                Se a <b>DECISÃO DO MINISTRO DA JUSTIÇA</b> também for negativa, significa que o processo administrativo de refúgio terminou </span> <br/> <span> e você será submetido à lei de estrangeiros vigente no Brasil.</span> <br/> <span>
                Neste caso, você pode procurar a Defensoria Pública da União para obter orientações sobre as medidas cabíveis.
            </span>
        </div>
        <footer>
          <Footer/>
           </footer>
   
   </div>
 );
}