import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/Tardigrade-logo.svg';
import BadgesList from '../components/BadgesList';

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
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Hamburguesas',
            lastName: 'Lili',
            email: 'hambuerguesaLili@gmail.com',
            jobTitle: '2 - 3 meses',
            twitter: 'HamburguesasLili',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Panaderia Lola',
            lastName: 'Reposteria',
            email: 'panaderiaLola@hotmail.com',
            jobTitle: '2 - 4 meses',
            twitter: 'panaderiaLola',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Dogstu',
            lastName: 'Animales',
            email: 'Dogstu@hotmail.com',
            jobTitle: '1 - 4 meses',
            twitter: 'Dogstu',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
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
           
          </div>
        </div>

       
       
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Nueva vinculación
            </Link>
          </div>

         
      </React.Fragment>
    );
  }
}

export default Badges;
