import React, { Component } from 'react'
import '../Styles/DarkMode.css';

export default class DarkMode extends Component {
  constructor(props) {
    super(props);
    this.state={
      DIA: new Date().getHours > 6 && Date().getHours < 18 ? true : false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    const { DIA } = this.state;
    DIA ? document.getElementsByTagName('body')[0].classList.remove('dark') : document.getElementsByTagName('body')[0].classList.add('dark');
    this.setState({ DIA: !DIA})
  }

  componentDidMount() {
    this.toggle();
  }



  render() {
    return (
      <div className='masterDark'>
        <button type='button' onClick={this.toggle}> Claro/Escuro</button>
        <h1>Título Grande</h1>
        <h2>Título Médio</h2>
        <h3>Título Pequeno</h3>
        <p id='darkP'> O Modo Noturno facilita a leitura à noite, e melhora a experiência de pessoas que sofrem com questões relacionadas ao brilho.A funcionalidade pode ser ativada manualmente ou de maneira automática,baseado em horário (das 18h até as 06h)  </p>
      </div>)
  }
}
