import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Teclado.css'
import Imagem from '../Images/imagem.png';

export default class Teclado extends Component {
  render() {
    return (
      <section>
        <header>
          <ul>
            <li >
              <Link to='/notFound' className='link' tabIndex='0'>
                Inicio
              </Link>
            </li>
            <li>
              <Link to='/notFound' className='link' tabIndex='0'>
                Ao Vivo
              </Link>
            </li>
            <li><Link to='/notFound' className='link' tabIndex='0'>
              Vídeo
            </Link></li>
            <li><Link to='/notFound' className='link' tabIndex='0'>
              Áudio
            </Link></li>
          </ul>
        </header>
        <p className="pDescription">
          A navegação por teclado permite que o usuário acesse o site sem precisar utilizar o mouse
        </p>
        <p className="pDescription">
          O Alt tem duas funções: mostrar uma alternativa em text, caso a imagem não consiga ser carregada e <b>servir como descrição para leitores de tela</b>.
        </p>
        <section className='masterTeclado'>
          <div className="video">
            <div className="thumb">
              <img src={Imagem} alt="Alt's servem para aparecer caso a imagem não seja carregada e para serem lidas por leitores de tela." />
            </div>
            <p className='tituloDoVideo'>Título do Vídeo</p>
          </div>

          <div className="video">
            <div className="thumb">
              <img alt="Alt's servem para aparecer caso a imagem não seja carregada e para serem lidas por leitores de tela." />
            </div>
            <p className='tituloDoVideo'>Título do Vídeo</p>
          </div>
        </section>
      </section>
    )
  }
}
