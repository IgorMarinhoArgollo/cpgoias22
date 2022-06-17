import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Link to='/ajuste' className='item'> Ajuste de tamanho de fonte</Link>
        <Link to='/darkmode' className='item'> DarkMode</Link>
        <Link to='/teclado' className='item'>Navegação por teclado e Alt</Link>
        <Link to='/filtrocolorblind' className='item'>Aplicação de filtro nativo para portadores de daltonismo</Link>
      </div>
    )
  }
}
