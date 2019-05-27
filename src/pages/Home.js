import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import astronautsImage from '../images/casa.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <div>
                <h2>
                Estamos enfocados en la optimización digital
                de procesos empresariales
                </h2>
              </div>

              <h1>OptimizAap</h1>
              <Link className="btn btn-primary" to="/badges">
                Vinculate
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
