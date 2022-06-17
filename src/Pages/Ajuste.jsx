import React, { Component } from 'react'
import '../Styles/Ajuste.css';

export default class Ajuste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TAMANHO_DA_FONTE: 18,
    }

    this.update = this.update.bind(this);
    this.aumentarFonte = this.aumentarFonte.bind(this);
  }

  diminuirFonte = () => {
    let { TAMANHO_DA_FONTE } = this.state;
    this.setState({ TAMANHO_DA_FONTE: TAMANHO_DA_FONTE - 1 });
  }
  componentDidUpdate() {
  this.update();
}
aumentarFonte = () => {
  let { TAMANHO_DA_FONTE } = this.state;
  this.setState({ TAMANHO_DA_FONTE: TAMANHO_DA_FONTE + 1 })
}

update = () => {
  document.getElementsByClassName('master')[0].style.fontSize = this.state.TAMANHO_DA_FONTE + 'px';
}

componentDidMount() {
  this.update();
}

render() {
  return (
    <div className='master'>
      <div className='masterAjuste'>
      <button type='button' onClick={this.aumentarFonte}> aumentar fonte</button>
      <button type='button' onClick={this.diminuirFonte}> diminuir fonte</button>
      <h1>Título Grande</h1>
      <h2>Título Médio</h2>
      <h3>Título Pequeno</h3>
      <p className='pDescription'> Função que permite ajustar o tamanho da fonte de acordo com a necessidade, oferecendo autonomia para o usuário.  </p>
      </div>
    </div>
  )
}
}
