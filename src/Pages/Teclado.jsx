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
        <section className='master'>
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
