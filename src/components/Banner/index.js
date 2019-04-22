import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import './banner.css'
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Banner = () => (
  <div className="banner fixed-top d-flex px-2 align-items-center">
    <Logo className="d-none d-sm-none d-md-block"></Logo>
    <ul className="m-0 p-0">
      <li>
        <Link to={ROUTES.HOME}>Inicio</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME+ROUTES.PROFILES}>Perfiles</Link>
      </li>
    </ul>
    <div className="h-100 ml-auto d-flex align-items-center">
      <span>nombre de usuario</span>
      <div className="user-profile-pic ml-2 hidden-xs">
        <img src="http://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg" />
      </div>
    </div>
    <div className="card drop-menu position-absolute pt-2 pb-2 pr-3 pl-4 mr-2 d-none">
      <Link to={ROUTES.LOGIN}>Cerrar sesión</Link>
    </div>
  </div>
);

export default Banner;