import React, { Component } from 'react';
import pmovel from '../img/pmovel.png'
import gost from '../img/gost.png'
import ingles from '../img/ingles.png'
import filosofia from '../img/filosofia.png'
import toes from '../img/toes.png'
import pweb from '../img/pweb.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel >
                <div>
                    <img src={pweb} alt="Imagem de uma materia do if" />
                    <p className="legend">Programação Web II</p>
                </div>
                <div>
                    <img src={pmovel}  alt="Imagem de uma materia do if"  />
                    <p className="legend">Programação Mobile</p>
                </div>
                <div>
                    <img src={gost}   alt="Imagem de uma materia do if" />
                    <p className="legend">Gestão Organizacional e Segurança do Trabalho</p>
                </div>
                <div>
                    <img src={ingles}  alt="Imagem de uma materia do if"  />
                    <p className="legend">Lingua Inglesa</p>
                </div>
                <div>
                    <img src={toes}  alt="Imagem de uma materia do if"  />
                    <p className="legend">Tópicos especiais</p>
                </div>
                <div>
                    <img src={filosofia}  alt="Imagem de uma materia do if" />
                    <p className="legend">Filosofia</p>
                </div>
            </Carousel>
        );
    }
};