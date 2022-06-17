import React, { Component } from 'react'
import '../Styles/Speech.css';
import Mic from '../Images/mic.svg';

export default class Speech extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listening: false,
    }
  }

  createRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = SpeechRecognition !== undefined ? new SpeechRecognition() : null

    if (!recognition) {
      window.alert('Infelizmente o seu navegador não suporta essa funcionalidade');
      return;
    }

    recognition.lang = 'pt_BR';
    recognition.onstart = () => this.setState({ listening: true });
    recognition.onend = () => this.setState({ listening: false });
    recognition.onerror = (error) => console.log('error', error);
    recognition.onresult = (e) => {
      document.getElementById('speechInput').value = e.results[0][0].transcript;
    }

    return recognition;
  }

  buttonFunction = () => {
    const { listening } = this.state;
    const recognition = this.createRecognition();
    listening ? recognition.stop() : recognition.start();
  }

listening = () => {
  const { listening } = this.state;
  listening ? document.getElementById('listening').innerHTML = 'Listening...' : document.getElementById('listening').innerHTML = '';
}

componentDidUpdate() {
  this.listening();
}

spacePress = (e) => {
  if(e.code === 'Space'){
    this.buttonFunction();
  }
}

  render() {
    return (
      <div className='listeningPageDiv' onKeyPress={this.spacePress}>
        <header className='speechHeader'>
          <input type="text" placeholder='pesquisar' id='speechInput' />
          <div className="iconeDiv">
            <button type='button' className='iconBtn' onClick={this.buttonFunction} autoFocus>
              <img src={Mic} alt="Ícone de Microfone" id='icone' />
            </button>
          </div>
        </header>
        <p id='listening'></p>
      </div>
    )
  }
}
