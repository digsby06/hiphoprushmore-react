// src/components/EmceesMenu.js
import React from 'react';
import { Link } from 'react-router';
import emcees from '../data/emcees';

export default class EmceesMenu extends React.Component {
  render() {
    return (
      <nav className="emcees-menu">
        {emcees.map(menuEmcee => {
          return <Link key={menuEmcee.id} to={`/emcee/${menuEmcee.id}`} activeClassName="active">
            {menuEmcee.rapper}
          </Link>;
        })}
      </nav>
    );
  }
}
