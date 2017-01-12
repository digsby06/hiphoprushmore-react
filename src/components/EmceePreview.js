// src/components/EmceePreview.js
import React from 'react';
import { Link } from 'react-router';

export default class EmceePreview extends React.Component {
  render() {
    return (
      <Link to={`/emcee/${this.props.id}`}>
        <div className="emcee-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          // <span className="albums-count"><img src="/img/medal.png"/> {this.props.albums.length}</span>
        </div>
      </Link>
    );
  }
}
