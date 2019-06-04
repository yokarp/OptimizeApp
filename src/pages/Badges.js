import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import hjc from '../images/LogoHJC.png';

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
       
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
           <h1>Bienvenido al mundo de oportunidades digitales que le ofrecemos</h1>
          </div>
        </div>

       
       
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nueva vinculación
            </Link>
          </div>

          <h1 className="Badges__hero"><br></br>Nuestros resultados</h1>
          <div>
            <img src={hjc} alt="ImagenHJC" className="parrafo"></img>
           
            <div className="parrafo">
              <p>
              Aplicativo que sistematiza la gestión de la información de HJC Electronis SAS, de técnicos, clientes, servicios técnicos, productos, historial de revisiones , inventario de repuestos, nómina, cuenta de cobro, facturación, historia clínica de productos, fallas de productos, documentación técnica de productos, informes técnicos, y rutas, con el fin de integrar toda la información de la empresa y optimizar los procesos de ingreso, modificación, y búsqueda, así como la generación de reportes estadísticos, de tal forma que se reduzcan tiempos y esfuerzos empleados en dicha labor, y se agilice la toma de decisiones a nivel administrativo a final de mes. 
              </p>
            </div>
          </div>

         
      </React.Fragment>
    );
  }
}

export default Badges;
