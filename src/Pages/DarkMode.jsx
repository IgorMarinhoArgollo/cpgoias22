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
      <div className='master'>
        <button type='button' onClick={this.toggle}> Claro/Escuro</button>
        <h1>Título Grande</h1>
        <h2>Título Médio</h2>
        <h3>Título Pequeno</h3>
        <p> Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,Texto texto,  </p>
      </div>)
  }
}
