import React, { Component } from 'react'
import '../Styles/Daltonico.css';
import Thumb1 from '../Images/thumb1.png';
import Thumb2 from '../Images/thumb2.png';
import Thumb3 from '../Images/thumb3.png';
import Thumb4 from '../Images/thumb4.png';
import Thumb5 from '../Images/thumb5.png';
import Thumb6 from '../Images/thumb6.png';

export default class Daltonico extends Component {

  protanopia = () => {
    document.querySelectorAll('.filter').forEach((element) => {
      element.classList.remove('deuteranopia');
      element.classList.remove('tritanopia');
      element.classList.add('protanopia');
    })
  }

  deuteranopia = () => {
    document.querySelectorAll('.filter').forEach((element) => {
      element.classList.remove('protanopia');
      element.classList.remove('tritanopia');
      element.classList.add('deuteranopia');
    })
  }

  tritanopia = () => {
    document.querySelectorAll('.filter').forEach((element) => {
      element.classList.remove('protanopia');
      element.classList.remove('deuteranopia');
      element.classList.add('tritanopia');
    })
  }

  semFiltro = () => {
    document.querySelectorAll('.filter').forEach((element) => {
      element.classList.remove('protanopia');
      element.classList.remove('deuteranopia');
      element.classList.remove('tritanopia');
    })
  }

  render() {
    return (
      <section className='filtersDiv'>
          <div className="btns">
            <button type='button' onClick={this.protanopia}> Protanopia</button>
            <button type='button' onClick={this.deuteranopia}> Deuteranopia</button>
            <button type='button' onClick={this.tritanopia}> Tritanopia</button>
            <button type='button' onClick={this.semFiltro}> Sem filtro</button>
          </div>
        <div className='mainVideos'>
          <div className='videoThumbnail'>
            <div className='filter'></div>
            <img src={Thumb1} alt="thumbnail do vídeo 1" />
          </div>

          <div className='videoThumbnail'>
            <div className='filter'></div>
            <img src={Thumb2} alt="thumbnail do video 2" />
          </div>

          <div className='videoThumbnail'>
            <div className='filter'></div>
            <img src={Thumb3} alt="thumbnail do vídeo 3" />
          </div>

          <div className='videoThumbnail'>
            <div className='filter'></div>
            <img src={Thumb4} alt="thumbnail do vídeo 4" />
          </div>

          <div className='videoThumbnail'>
            <div className='filter'></div>
            <img src={Thumb5} alt="thumbnail do vídeo 5" />
          </div>

          <div className='videoThumbnail'>
            <div className='filter'></div>
            <img src={Thumb6} alt="thumbnail do vídeo 6" />
          </div>

        </div>
      </section>
    )
  }
}
