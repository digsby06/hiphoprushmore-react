// src/components/EmceePage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import EmceesMenu from './EmceesMenu';
import emcees from '../data/emcees';

export default class EmceePage extends React.Component {
  render() {
    const id = this.props.params.id;
    const emcee = emcees.filter((emcee) => emcee.id === id)[0];
    if (!emcee) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${emcee.cover})` };
    return (
      <div className="emcee-full">
        <EmceesMenu/>
        <div className="emcee">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${emcee.image}`}/>
            <h2 className="name">{emcee.name}</h2>
          </div>
          <section className="description">
            {emcee.name} is from {emcee.city}, {emcee.state}
            born in {emcee.birth} (Find out more on <a href={emcee.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="medals">
            <p>Discography includes <strong>{emcee.albums.length}</strong> albums:</p>
            <ul>{
              emcee.albums.map((album, i) => <Album key={i} {...album}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
